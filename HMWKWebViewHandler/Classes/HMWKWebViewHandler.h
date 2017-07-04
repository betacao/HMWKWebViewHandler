//
//  HMWKWebViewHandler.h
//  HMWKWebViewHandler
//
//  Created by Beta_Cao on 04/07/2017.
//  Copyright © 2017 Beta_Cao. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <WebKit/WebKit.h>

@interface HMWKWebViewHandler : NSObject

@property (strong, nonatomic) WKWebView *webView;
@property (strong, nonatomic) NSString  *handlerJS;

+ (instancetype)shareInstance;

+ (void)getInject:(WKWebView *)webView;

@end
