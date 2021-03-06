//
//  NoGamesTableViewCell.m
//  Hockey Playoffs
//
//  Created by Pierre-Marc Airoldi on 2014-04-06.
//  Copyright (c) 2015 Pierre-Marc Airoldi. All rights reserved.
//

#import "NoDataTableViewCell.h"
#import "Colors.h"
#import "Dimensions.h"

@implementation NoDataTableViewCell

- (id)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier {
    
    self = [super initWithStyle:style reuseIdentifier:reuseIdentifier];
    
    if (self) {
        
        self.contentView.backgroundColor = [Colors gameBackgroundColor];
        
        self.selectionStyle = UITableViewCellSelectionStyleNone;
        
        self.separatorInset = UIEdgeInsetsZero;
        
        self.textLabel.textColor = [Colors gameCellStatusTextColor];
        self.textLabel.textAlignment = NSTextAlignmentCenter;
        self.textLabel.font = [UIFont systemFontOfSize:DETAIL_GAME_STATUS_FONT_SIZE];
        self.textLabel.numberOfLines = 1;
        self.textLabel.adjustsFontSizeToFitWidth = YES;
        self.textLabel.lineBreakMode = NSLineBreakByWordWrapping;
    }
    
    return self;
}

- (void)setSelected:(BOOL)selected animated:(BOOL)animated {
    
    [super setSelected:selected animated:animated];
    
    // Configure the view for the selected state
}

-(void)layoutSubviews {
    
    [super layoutSubviews];
}

- (void)prepareForReuse {
    
    [super prepareForReuse];
    
    [self layoutSubviews];
}

+(CGFloat)height {
    
    return 44;
}

@end
