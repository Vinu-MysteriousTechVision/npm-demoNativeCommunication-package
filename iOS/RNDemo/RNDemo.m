//
//  RNDemo.m
//  RNDemo
//
//  Created by Vinu Venu on 09/03/18.
//  Copyright © 2018 MySteriousTechVision. All rights reserved.
//

#import "RNDemo.h"

@implementation RNDemo

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getModuleList: (RCTResponseSenderBlock)callback)
{
    NSArray *nativeModuleList = @[@"react-native-fbsdk", @"react-native-camera", @"react-native-maps"];
    callback(@[[NSNull null], nativeModuleList]);
}
@end

