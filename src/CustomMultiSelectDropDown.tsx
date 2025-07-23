import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { getCustomThemeConfig } from './Config';
import CustomText from './CustomText';
import { MultiSelect } from 'react-native-element-dropdown';
import { CloseRoundIcon } from './icons/CloseRoundIcon';
import { CheckBox } from './icons/CheckBox';
import { UncheckBox } from './icons/UncheckBox';

/**
 * Props for CustomMultiSelectDropDown component
 */
interface CustomMultiSelectDropDownProps {
  /**
   * Optional label/title displayed above the multi-select dropdown.
   */
  title?: string;

  /**
   * Placeholder text shown when no items are selected.
   */
  placeholder?: string;

  /**
   * Enables floating label behavior (label floats above input when focused or filled)
   */
  isFloating?: boolean;

  /**
   * List of options to display in the dropdown.
   *
   * Each item should have a `label` (text shown to user) and a `value` (underlying string identifier).
   */
  data: { label: string; value: string }[];

  /**
   * Array of currently selected values.
   *
   * Each item in the array should match a `value` from the `data` list.
   */
  value?: string[] | null;

  /**
   * Callback triggered when the selection changes.
   *
   * Returns the updated list of selected values.
   */
  onChange?: (items: string[]) => void;

  /**
   * Optional error message displayed below the dropdown.
   *
   * If provided, the dropdown will show an error style.
   */
  errorText?: string;

  /**
   * Optional icon to display next to the error message.
   */
  renderErrorIcon?: React.ReactNode;

  /**
   * Enables a search bar within the dropdown list.
   *
   * Useful for filtering long lists of options.
   * @default false
   */
  search?: boolean;

  /**
   * Custom placeholder text for the search input.
   */
  searchPlaceholder?: string;

  /**
   * Disables the dropdown if set to `true`.
   *
   * Prevents user interaction when in a read-only or disabled state.
   * @default false
   */
  disable?: boolean;

  /**
   * Label text for the "Select All" option.
   *
   * Can be localized or customized.
   * Example: "All", "Select All", "Todos", etc.
   */
  selectAllLabel?: string;

  /**
   * Enables or disables the "Select All" option in the dropdown list.
   * @default false
   */
  isAllSelectedEnabled?: boolean;

  /**
   * Custom styles for the title text above the dropdown.
   */
  titleTxtStyle?: StyleProp<TextStyle>;

  /**
   * Custom styles for the selected item text shown in the dropdown.
   */
  selectedTextStyle?: StyleProp<TextStyle>;

  /**
   * Custom styles for the outer container of the dropdown component.
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Custom styles for the dropdown itself (e.g., padding, border).
   */
  style?: StyleProp<ViewStyle>;
  /**
   * If true (default), renders custom chips for selected items.
   */
  isRenderSelectedItem?: boolean;
  /**
   * Determines the position of the dropdown menu.
   *
   * - 'auto' (default): Automatically decides the best position.
   * - 'top': Renders the dropdown above the input field.
   * - 'bottom': Renders the dropdown below the input field.
   */
  dropdownPosition?: 'auto' | 'top' | 'bottom';
}

enum CustomMultiSelect {
  selectAll = 'selectAll',
}

function getStyles({
  colors,
  fontFamily,
  fontSizes,
}: ReturnType<typeof getCustomThemeConfig>) {
  return StyleSheet.create({
    containerStyle: {
      alignSelf: 'stretch',
      marginVertical: 4,
    },
    titleTxtStyle: {
      marginBottom: 16,
    },
    floatingLabel: {
      position: 'absolute',
      top: -10,
      left: 20,
      backgroundColor: colors.white,
      paddingHorizontal: 4,
      fontSize: fontSizes.xs,
      fontFamily: fontFamily.Medium,
      color: colors.primary,
      zIndex: 1,
    },
    dropdown: {
      borderWidth: 1,
      borderRadius: 20,
      paddingLeft: 24,
      paddingRight: 12,
      paddingVertical: 14,
    },
    placeholderStyle: {
      fontFamily: fontFamily.Regular,
      fontSize: fontSizes.md,
      color: colors.disable,
    },
    selectedTextStyle: {
      fontFamily: fontFamily.Regular,
      fontSize: fontSizes.md,
      color: colors.black,
    },
    inputSearchStyle: {
      fontFamily: fontFamily.Regular,
      fontSize: fontSizes.md,
      color: colors.black,
    },
    errorStyle: {
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
    itemTextStyle: {
      color: colors.black,
    },
    selectedOption: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 12,
      marginRight: 10,
      paddingLeft: 10,
      paddingRight: 6,
      paddingVertical: 4,
      borderWidth: 1,
      borderColor: colors.disable,
      borderRadius: 20,
      maxWidth: Dimensions.get('window').width - 48,
    },
    selectedTxtStyle: {
      marginRight: 8,
    },
    optionStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
      paddingVertical: 12,
    },
  });
}

const CustomMultiSelectDropDown: React.FC<CustomMultiSelectDropDownProps> = ({
  title,
  placeholder,
  isFloating,
  data,
  value = [],
  errorText,
  renderErrorIcon,
  onChange,
  search = false,
  searchPlaceholder,
  disable = false,
  isAllSelectedEnabled = false,
  selectAllLabel = 'All',
  titleTxtStyle,
  selectedTextStyle,
  containerStyle,
  style,
  isRenderSelectedItem = true,
  dropdownPosition = 'auto',
}) => {
  const { colors, fontFamily, fontSizes } = getCustomThemeConfig();
  const styles = getStyles({ colors, fontFamily, fontSizes });

  const [focused, setFocused] = useState(false);

  const shouldFloat = isFloating && (focused || !!value);

  const allValues = data.map((item) => item.value);
  const isAllSelected =
    isAllSelectedEnabled &&
    value &&
    value?.length > 0 &&
    allValues?.every((val) => value?.includes(val));

  const handleSelectAll = () => {
    if (isAllSelected) {
      onChange?.([]); // Deselect all
    } else {
      onChange?.(allValues); // Select all
    }
  };

  const dropdownData = isAllSelectedEnabled
    ? [{ label: selectAllLabel, value: CustomMultiSelect.selectAll }, ...data]
    : data;

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      {title && !isFloating && (
        <CustomText size="sm" style={[styles.titleTxtStyle, titleTxtStyle]}>
          {title}
        </CustomText>
      )}

      {title && isFloating && shouldFloat && (
        <CustomText style={[styles.floatingLabel, titleTxtStyle]}>
          {title}
        </CustomText>
      )}
      <MultiSelect
        style={[
          styles.dropdown,
          {
            borderColor: errorText
              ? colors.error
              : focused
                ? colors.primary
                : colors.disable,
          },
          style,
        ]}
        dropdownPosition={dropdownPosition}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        itemTextStyle={styles.itemTextStyle}
        data={dropdownData}
        maxHeight={300}
        search={search}
        searchPlaceholder={searchPlaceholder}
        labelField="label"
        valueField="value"
        placeholder={isFloating ? title : placeholder}
        value={value}
        onChange={(item) => {
          if (item.includes(CustomMultiSelect.selectAll)) {
            handleSelectAll();
          } else {
            const filtered = item.filter(
              (val) => val !== CustomMultiSelect.selectAll
            );
            onChange?.(filtered);
          }
        }}
        renderItem={(item) => {
          if (item.value === CustomMultiSelect.selectAll) {
            return (
              <TouchableOpacity
                onPress={handleSelectAll}
                style={styles.optionStyle}
              >
                <CustomText>{item.label}</CustomText>
                {isAllSelected ? <CheckBox /> : <UncheckBox />}
              </TouchableOpacity>
            );
          }
          const isSelected = value?.includes(item.value);
          return (
            <View style={styles.optionStyle}>
              <CustomText children={item.label} />
              {isSelected ? <CheckBox /> : <UncheckBox />}
            </View>
          );
        }}
        renderSelectedItem={(item, unSelect) => {
          if (!isRenderSelectedItem) return <></>;
          if (
            isAllSelected &&
            data &&
            data?.[0] &&
            item.value === data[0].value
          ) {
            // Only render "All" chip once
            return (
              <TouchableOpacity
                style={styles.selectedOption}
                onPress={handleSelectAll}
              >
                <CustomText numberOfLines={1} style={styles.selectedTxtStyle}>
                  {selectAllLabel}
                </CustomText>
                <CloseRoundIcon />
              </TouchableOpacity>
            );
          }
          if (isAllSelected) return <></>;
          return (
            <TouchableOpacity
              style={styles.selectedOption}
              onPress={() => unSelect && unSelect(item)}
            >
              <CustomText
                numberOfLines={1}
                style={styles.selectedTxtStyle}
                children={item.label}
              />
              <CloseRoundIcon />
            </TouchableOpacity>
          );
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        disable={disable}
      />
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

export default CustomMultiSelectDropDown;
