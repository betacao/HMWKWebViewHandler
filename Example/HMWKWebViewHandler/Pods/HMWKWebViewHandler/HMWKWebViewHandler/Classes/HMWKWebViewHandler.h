//
//  HMWKWebViewHandler.h
//  Pods
//
//  Created by Beta_Cao on 17/07/04.
//
//

#import <Foundation/Foundation.h>
#import <webkit/webkit.h>

extern const NSString *EventHandler;

@interface HMWKWebViewHandler : NSObject<WKScriptMessageHandler>
@property (nonatomic, weak) WKWebView *webView;
	@property (nonatomic, strong) NSString  *handlerJS;
	
+ (instancetype)shareInstance;
+ (void)getInject:(WKWebView *)webView;
	
	@end
