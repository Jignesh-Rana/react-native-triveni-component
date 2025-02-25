import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  type StyleProp,
  type TextStyle,
  type TouchableOpacityProps,
  type ViewStyle,
} from 'react-native';
import { useHasNotch } from './customHooks';
import { getCustomThemConfig } from './Config';

interface CustomButtonProps extends TouchableOpacityProps {
  title?: string;
  variant?: 'default' | 'border'; // Variant prop for button style
  style?: StyleProp<ViewStyle>; // Optional external styles
  btnTitleStyle?: StyleProp<TextStyle>; // Optional external title text styles
  btnBgColor?: string;
  icon?: React.ReactNode;
  isBottomMargin?: boolean;
  radius?: 'normal' | 'round' | 'none';
}

const config = getCustomThemConfig();

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  variant = 'default',
  btnBgColor = 'blue',
  disabled,
  style,
  btnTitleStyle,
  icon,
  radius = 'round',
  isBottomMargin = false,
  ...props
}) => {
  const hasNotch = useHasNotch();

  return (
    <TouchableOpacity
      style={[
        styles[radius],
        styles.fixButtonStyle,
        variant === 'border' && styles.borderBtnViewStyle,
        disabled
          ? styles.disabledStyle
          : variant !== 'border' && { backgroundColor: btnBgColor },
        isBottomMargin && !hasNotch && styles.hasNotch,
        style,
      ]}
      disabled={disabled}
      {...props}
    >
      {icon && <View style={styles.leftIcon}>{icon}</View>}
      {title && (
        <Text
          style={[
            styles.fixTxtStyle,
            disabled && styles.disabledTextStyle,
            btnTitleStyle,
            btnBgColor === 'white' || variant === 'border'
              ? styles.textBorderStyle
              : {},
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  fixButtonStyle: {
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  borderBtnViewStyle: {
    backgroundColor: config.colors.white,
    borderWidth: 2,
    borderColor: config.colors.blue,
  },
  disabledStyle: {
    backgroundColor: config.colors.gray,
    borderWidth: 0,
  },
  fixTxtStyle: {
    color: config.colors.white,
    textTransform: 'uppercase',
  },
  textBorderStyle: {
    color: config.colors.blue,
  },
  disabledTextStyle: {
    color: config.colors.gray,
  },
  leftIcon: {
    marginRight: 18,
  },
  round: {
    borderRadius: 50,
  },
  normal: {
    borderRadius: 20,
  },
  none: {
    borderRadius: 0,
  },
  hasNotch: {
    marginBottom: 24,
  },
});
