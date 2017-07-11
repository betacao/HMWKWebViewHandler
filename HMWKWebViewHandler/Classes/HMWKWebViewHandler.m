//
//  HMWKWebViewHandler.m
//  HMWKWebViewHandler
//
//  Created by Beta_Cao on 04/07/2017.
//  Copyright © 2017 Beta_Cao. All rights reserved.
//

#import "HMWKWebViewHandler.h"

NSString *EventHandler = @"HMWKWebViewHandler";

static HMWKWebViewHandler *handler= nil;

@implementation HMWKWebViewHandler

+ (instancetype)shareInstance
{
	static dispatch_once_t onceToken;
	dispatch_once(&onceToken, ^{
		handler = [HMWKWebViewHandler new];
		handler.handlerJS = [handler getJsString];
	});
	return handler;
}

- (NSString *)getJsString
{
	NSString *path = [[NSBundle bundleForClass:[self class]] pathForResource:@"HMWKWebViewHandler" ofType:@"js"];
	NSString *handlerJS = [NSString stringWithContentsOfFile:path encoding:NSUTF8StringEncoding error:nil];
	handlerJS = [handlerJS stringByReplacingOccurrencesOfString:@"\n" withString:@""];
	return handlerJS;
}

+ (void)getInject:(WKWebView *)webView
{
	[HMWKWebViewHandler shareInstance].webView = webView;
}

#pragma mark - WKScriptMessageHandler
- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message
{
	if ([message.name isEqualToString:EventHandler]) {
		NSString *methodName = message.body[@"methodName"];
		NSDictionary *params = message.body[@"params"];
		NSString *callBackName = message.body[@"callBackName"];
		if (callBackName) {
			__weak  WKWebView *weakWebView = self.webView;
			[self interactWithMethodName:methodName params:params:^(id response) {
				NSString *js = [NSString stringWithFormat:@"HMWKWebViewHandler.callBack('%@',%@);",callBackName,response];
				dispatch_async(dispatch_get_main_queue(), ^{
					[weakWebView evaluateJavaScript:js completionHandler:^(id _Nullable data, NSError * _Nullable error) {
						NSLog(@"mmmmmmmmmmmmmmm");
					}];
				});
			}];
		} else {
			[self interactWithMethodName:methodName params:params :nil];
		}
	}
}

- (void)interactWithMethodName:(NSString *)methodName params:(NSDictionary *)params :(void(^)(id response))callBack
{
	if (params) {
		methodName = [NSString stringWithFormat:@"%@:",methodName];
		if (callBack) {
			methodName = [methodName stringByAppendingString:@"block:"];
			SEL selector = NSSelectorFromString(methodName);
			NSArray *paramArray = @[params,callBack];
			if ([self respondsToSelector:selector]) {
				[self HMPerformSelector:selector withObjects:paramArray];
			}
		} else {
			SEL selector = NSSelectorFromString(methodName);
			NSArray *paramArray = @[params];
			if ([self respondsToSelector:selector]) {
				[self HMPerformSelector:selector withObjects:paramArray];
			}
		}
	} else {
		if (callBack) {
			methodName = [methodName stringByAppendingString:@"block:"];
			SEL selector = NSSelectorFromString(methodName);
			NSArray *paramArray = @[callBack];
			if ([self respondsToSelector:selector]) {
				[self HMPerformSelector:selector withObjects:paramArray];
			}
		} else {
			SEL selector = NSSelectorFromString(methodName);
			if ([self respondsToSelector:selector]) {
				[self HMPerformSelector:selector withObjects:nil];
			}
		}
	}
}

- (id)HMPerformSelector:(SEL)aSelector withObjects:(NSArray *)objects
{
	NSMethodSignature *signature = [self methodSignatureForSelector:aSelector];
	NSInvocation *invocation = [NSInvocation invocationWithMethodSignature:signature];
	[invocation setTarget:self];
	[invocation setSelector:aSelector];
	
	NSUInteger i = 1;
	
	for (id object in objects) {
		id tempObject = object;
		[invocation setArgument:&tempObject atIndex:++i];
	}
	[invocation invoke];
	
	if ([signature methodReturnLength]) {
		id data;
		[invocation getReturnValue:&data];
		return data;
	}
	return nil;
}


@end
