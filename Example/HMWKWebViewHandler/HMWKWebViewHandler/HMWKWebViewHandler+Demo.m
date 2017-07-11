//
//  HMWKWebViewHandler+Demo.m
//  HMWKWebViewHandler
//
//  Created by Beta_Cao on 11/07/2017.
//  Copyright © 2017 Beta_Cao. All rights reserved.
//

#import "HMWKWebViewHandler+Demo.h"

@implementation HMWKWebViewHandler (Demo)

- (void)sendInfoToNative:(id)object
{
	NSLog(@"%@", object);
}

- (void)getInfoFromNative:(id)object block:(void(^)(id response))callBack
{
	dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(5.0f * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
		callBack(@"123");
	});
}

@end
