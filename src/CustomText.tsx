import React from 'react';
import { Text, type TextProps, type TextStyle } from 'react-native';
import { getCustomThemConfig } from './Config';

export interface CustomTextProps extends TextProps {
  size?: keyof ReturnType<typeof getCustomThemConfig>['fontSizes'];
  font?: keyof ReturnType<typeof getCustomThemConfig>['fontFamily'];
  textColor?: keyof ReturnType<typeof getCustomThemConfig>['colors'];
  style?: TextProps['style'];
}

const CustomText: React.FC<CustomTextProps> = ({
  size = 'base',
  font = 'Regular',
  textColor = 'black',
  style,
  ...props
}) => {
  const config = getCustomThemConfig();
  return (
    <Text
      style={[
        {
          fontSize: config.fontSizes[size],
          fontFamily: config.fontFamily[font],
          color: config.colors[textColor],
        } as TextStyle,
        style,
      ]}
      {...props}
    >
      {props.children}
    </Text>
  );
};

export default CustomText;
