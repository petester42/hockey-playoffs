//
//  NewsViewController.m
//  Hockey Playoffs
//
//  Created by Pierre-Marc Airoldi on 2/23/2014.
//  Copyright (c) 2015 Pierre-Marc Airoldi. All rights reserved.
//

#import "NewsViewController.h"
#import "Colors.h"

@interface NewsViewController ()

@end

@implementation NewsViewController

-(id)init {
    
    self = [super init];
    
    if (self) {
        // Custom initialization
        
        self.title = NSLocalizedString(@"controller.news.title", nil);
        
        self.tabBarItem = [[UITabBarItem alloc] initWithTitle:self.title image:nil selectedImage:nil];
        
        self.view.backgroundColor = [Colors backgroundColor];
    }
    
    return self;
}

- (void)viewDidLoad {
    
    [super viewDidLoad];
	// Do any additional setup after loading the view.
}

- (void)didReceiveMemoryWarning {
    
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
