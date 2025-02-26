import React, { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  type TextInputProps,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import { getCustomThemeConfig } from './Config';
import CustomText from './CustomText';

interface CustomTextInputProps extends TextInputProps {
  title?: string;
  titleTxtStyle?: StyleProp<TextStyle>;
  inputContainer?: StyleProp<ViewStyle>;
  mainContainer?: StyleProp<ViewStyle>;
  renderLeftIcon?: React.ReactNode;
  renderRightIcon?: React.ReactNode;
  renderErrorIcon?: React.ReactNode;
  errorText?: string;
}

const getStyles = ({
  colors,
  fontFamily,
  fontSizes,
}: ReturnType<typeof getCustomThemeConfig>) =>
  StyleSheet.create({
    containerStyle: {
      alignSelf: 'stretch',
      marginVertical: 12,
    },
    titleTxtStyle: {
      marginBottom: 16,
    },
    inputContainer: {
      flexDirection: 'row',
      paddingHorizontal: 24,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor: colors.primary,
      borderWidth: 1,
      borderRadius: 20,
      backgroundColor: colors.white,
    },
    inputStyle: {
      fontFamily: fontFamily.Regular,
      fontSize: fontSizes.md,
      flex: 1,
      paddingVertical: 14,
      color: colors.black,
    },
    leftIconStyle: {
      paddingRight: 10,
    },
    rightIconStyle: {
      paddingLeft: 10,
    },
    errorStyle: {
      flex: 1,
      color: colors.error,
    },
    iconStyle: {
      marginRight: 10,
    },
    errorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
  });

const CustomInput: React.FC<CustomTextInputProps> = (props) => {
  const {
    title,
    inputContainer,
    renderLeftIcon,
    renderRightIcon,
    errorText,
    mainContainer,
    titleTxtStyle,
    renderErrorIcon,
  } = props;
  const { colors, fontFamily, fontSizes } = getCustomThemeConfig();
  const styles = getStyles({ colors, fontFamily, fontSizes });
  const [focused, setFocused] = useState(false);

  return (
    <View style={[styles.containerStyle, mainContainer]}>
      {title && (
        <CustomText size="sm" style={[styles.titleTxtStyle, titleTxtStyle]}>
          {title}
        </CustomText>
      )}
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: !!errorText
              ? colors.error
              : focused
                ? colors.primary
                : colors.gray,
          },
          inputContainer,
        ]}
      >
        {renderLeftIcon && (
          <View style={styles.leftIconStyle}>{renderLeftIcon}</View>
        )}
        <TextInput
          {...props}
          style={[
            styles.inputStyle,
            { color: !!errorText ? colors.error : colors.black },
            props.style,
          ]}
          placeholderTextColor={colors.disable}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {renderRightIcon && (
          <View style={styles.rightIconStyle}>{renderRightIcon}</View>
        )}
      </View>
      {errorText && (
        <View style={styles.errorContainer}>
          {renderErrorIcon && (
            <View style={styles.iconStyle}>{renderErrorIcon}</View>
          )}
          <CustomText size="xs" font="Regular" style={styles.errorStyle}>
            {errorText}
          </CustomText>
        </View>
      )}
    </View>
  );
};

export default CustomInput;
