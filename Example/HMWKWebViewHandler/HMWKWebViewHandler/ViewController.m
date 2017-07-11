//
//  ViewController.m
//  HMWKWebViewHandler
//
//  Created by Beta_Cao on 04/07/2017.
//  Copyright © 2017 Beta_Cao. All rights reserved.
//

#import "ViewController.h"
#import <HMWKWebViewHandler/HMWKWebView.h>
#import <Masonry/Masonry.h>
#import <WebKit/WebKit.h>
#import <YYKit/YYKit.h>

@interface ViewController ()<WKNavigationDelegate, WKUIDelegate>

@property (strong, nonatomic) WKWebView	*webView;

@property (strong, nonatomic) UIProgressView *progressView;

@end

@implementation ViewController

- (void)viewDidLoad
{
	[super viewDidLoad];
	[self initView];
	[self addAutoLayout];
}

- (void)initView
{
	WKWebViewConfiguration *configuration = [[WKWebViewConfiguration alloc] init];
	
	WKPreferences *preferences = [[WKPreferences alloc] init];
	preferences.javaScriptEnabled = YES;
	preferences.javaScriptCanOpenWindowsAutomatically = YES;
	
	WKProcessPool *processPool = [[WKProcessPool alloc] init];
	
	WKUserScript *script = [[WKUserScript alloc] initWithSource:[HMWKWebViewHandler shareInstance].handlerJS injectionTime:WKUserScriptInjectionTimeAtDocumentEnd forMainFrameOnly:YES];
	
	WKUserContentController *controller = [[WKUserContentController alloc] init];
	[controller addUserScript:script];
	[controller addScriptMessageHandler:[HMWKWebViewHandler shareInstance] name:@""];
	
	configuration.preferences = preferences;
	configuration.processPool = processPool;
	configuration.userContentController = controller;
	
	self.webView = [[WKWebView alloc] initWithFrame:CGRectZero configuration:configuration];
	[self.webView loadRequest:[NSURLRequest requestWithURL:[NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"test" ofType:@"html"]]]];
	self.webView.UIDelegate = self;
	self.webView.navigationDelegate = self;
	
	@weakify(self)
	[self.webView addObserverBlockForKeyPath:@"loading" block:^(id  _Nonnull obj, id  _Nullable oldVal, id  _Nullable newVal) {
		NSLog(@"loading");
		[weak_self hideProgressView];
	}];
	[self.webView addObserverBlockForKeyPath:@"title" block:^(id  _Nonnull obj, id  _Nullable oldVal, id  _Nullable newVal) {
		weak_self.title = weak_self.webView.title;
		[weak_self hideProgressView];
	}];
	[self.webView addObserverBlockForKeyPath:@"estimatedProgress" block:^(id  _Nonnull obj, id  _Nullable oldVal, id  _Nullable newVal) {
		weak_self.progressView.progress = weak_self.webView.estimatedProgress;
		[weak_self hideProgressView];
	}];
	[self.view addSubview:self.webView];
	
	[HMWKWebViewHandler getInject:self.webView];
	
	
	self.progressView = [[UIProgressView alloc] initWithProgressViewStyle:UIProgressViewStyleDefault];
	[self.view addSubview:self.progressView];
}

- (void)addAutoLayout
{
	@weakify(self)
	[self.webView mas_makeConstraints:^(MASConstraintMaker *make) {
		make.width.mas_equalTo(weak_self.view.width);
		make.height.mas_equalTo(weak_self.view.height);
	}];
}

- (void)hideProgressView
{
	if (!self.webView.loading) {
		[UIView animateWithDuration:0.5 animations:^{
			self.progressView.alpha = 0;
		}];
	}
}


#pragma mark - WKNavigationDelegate

// 请求开始前，会先调用此代理方法
// 与UIWebView的
// - (BOOL)webView:(UIWebView *)webView
// shouldStartLoadWithRequest:(NSURLRequest *)request
// navigationType:(UIWebViewNavigationType)navigationType;
// 类型，在请求先判断能不能跳转（请求）
- (void)webView:(WKWebView *)webView decidePolicyForNavigationAction:(nonnull WKNavigationAction *)navigationAction decisionHandler:(nonnull void (^)(WKNavigationActionPolicy))decisionHandler
{
	self.progressView.alpha = 1.0;
	decisionHandler(WKNavigationActionPolicyAllow);
	
	NSLog(@"00===%s", __FUNCTION__);
}

// 在响应完成时，会回调此方法
// 如果设置为不允许响应，web内容就不会传过来
- (void)webView:(WKWebView *)webView decidePolicyForNavigationResponse:(WKNavigationResponse *)navigationResponse decisionHandler:(void (^)(WKNavigationResponsePolicy))decisionHandler
{
	decisionHandler(WKNavigationResponsePolicyAllow);
	NSLog(@"11===%s", __FUNCTION__);
}

// 开始导航跳转时会回调
- (void)webView:(WKWebView *)webView didStartProvisionalNavigation:(null_unspecified WKNavigation *)navigation
{
	NSLog(@"22===%s", __FUNCTION__);
}

// 接收到重定向时会回调
- (void)webView:(WKWebView *)webView didReceiveServerRedirectForProvisionalNavigation:(null_unspecified WKNavigation *)navigation
{
	NSLog(@"33===%s", __FUNCTION__);
}

// 导航失败时会回调
- (void)webView:(WKWebView *)webView didFailProvisionalNavigation:(null_unspecified WKNavigation *)navigation withError:(NSError *)error
{
	NSLog(@"44===%s", __FUNCTION__);
}


// 页面内容到达main frame时回调
- (void)webView:(WKWebView *)webView didCommitNavigation:(null_unspecified WKNavigation *)navigation
{
	NSLog(@"55===%s", __FUNCTION__);
}


// 导航完成时，会回调（也就是页面载入完成了）
- (void)webView:(WKWebView *)webView didFinishNavigation:(null_unspecified WKNavigation *)navigation
{
	NSLog(@"66===%s", __FUNCTION__);
}


// 导航失败时会回调
- (void)webView:(WKWebView *)webView didFailNavigation:(null_unspecified WKNavigation *)navigation withError:(NSError *)error
{
	NSLog(@"77===%s", __FUNCTION__);
}

// 对于HTTPS的都会触发此代理，如果不要求验证，传默认就行
// 如果需要证书验证，与使用AFN进行HTTPS证书验证是一样的
- (void)webView:(WKWebView *)webView didReceiveAuthenticationChallenge:(NSURLAuthenticationChallenge *)challenge completionHandler:(void (^)(NSURLSessionAuthChallengeDisposition disposition, NSURLCredential *__nullable credential))completionHandler
{
	NSLog(@"88===%s", __FUNCTION__);
	completionHandler(NSURLSessionAuthChallengePerformDefaultHandling, nil);
}

// 9.0才能使用，web内容处理中断时会触发
- (void)webViewWebContentProcessDidTerminate:(WKWebView *)webView
{
	NSLog(@"99===%s", __FUNCTION__);
}


// 在JS端调用alert函数时，会触发此代理方法。
// JS端调用alert时所传的数据可以通过message拿到
// 在原生得到结果后，需要回调JS，是通过completionHandler回调
- (void)webView:(WKWebView *)webView runJavaScriptAlertPanelWithMessage:(NSString *)message initiatedByFrame:(WKFrameInfo *)frame completionHandler:(void (^)(void))completionHandler
{
	NSLog(@"100===%s", __FUNCTION__);
	UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"alert" message:message preferredStyle:UIAlertControllerStyleAlert];
	[alert addAction:[UIAlertAction actionWithTitle:@"确定" style: UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
		completionHandler();
	}]];
	
	[self presentViewController:alert animated:YES completion:NULL];
	NSLog(@"%@", message);
}

// JS端调用confirm函数时，会触发此方法
// 通过message可以拿到JS端所传的数据
// 在iOS端显示原生alert得到YES/NO后
// 通过completionHandler回调给JS端
- (void)webView:(WKWebView *)webView runJavaScriptConfirmPanelWithMessage:(NSString *)message initiatedByFrame:(WKFrameInfo *)frame completionHandler:(void (^)(BOOL result))completionHandler
{
	NSLog(@"101===%s", __FUNCTION__);
	UIAlertController *alert = [UIAlertController alertControllerWithTitle: @"confirm" message:@"JS调用confirm" preferredStyle:UIAlertControllerStyleAlert];
	[alert addAction:[UIAlertAction actionWithTitle:@"确定" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action){
		completionHandler(YES);
	}]];
	[alert addAction:[UIAlertAction actionWithTitle:@"取消" style:UIAlertActionStyleCancel handler:^(UIAlertAction * _Nonnull action) {
		completionHandler(NO);
	}]];
	[self presentViewController:alert animated:YES completion:NULL];
	NSLog(@"%@", message);
}

// JS端调用prompt函数时，会触发此方法
// 要求输入一段文本
// 在原生输入得到文本内容后，通过completionHandler回调给JS
- (void)webView:(WKWebView *)webView runJavaScriptTextInputPanelWithPrompt:(NSString *)prompt defaultText:(nullable NSString *)defaultText initiatedByFrame:(WKFrameInfo *)frame completionHandler:(void (^)(NSString * __nullable result))completionHandler
{
	NSLog(@"102===%s", __FUNCTION__);
	NSLog(@"%@", prompt);
	
	UIAlertController *alert = [UIAlertController alertControllerWithTitle: prompt message:defaultText preferredStyle:UIAlertControllerStyleAlert];
	[alert addTextFieldWithConfigurationHandler:^(UITextField * _Nonnull textField) {
		textField.textColor = [UIColor redColor];
	}];
	[alert addAction:[UIAlertAction actionWithTitle:@"确定" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
		completionHandler([[alert.textFields lastObject] text]);
	}]];
	
	[self presentViewController:alert animated:YES completion:NULL];
}

- (void)dealloc
{
	[self.webView removeObserverBlocksForKeyPath:@"loading"];
	[self.webView removeObserverBlocksForKeyPath:@"title"];
	[self.webView removeObserverBlocksForKeyPath:@"estimatedProgress"];
	[self.webView.configuration.userContentController removeScriptMessageHandlerForName:EventHandler];
	[_webView evaluateJavaScript:@"HMWKWebViewHandler.removeAllCallBacks();" completionHandler:^(id _Nullable data, NSError * _Nullable error) {
		
		
	}];//删除所有的回调事件
}

- (void)didReceiveMemoryWarning
{
	[super didReceiveMemoryWarning];
}


@end
