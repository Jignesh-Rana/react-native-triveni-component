import { View, StyleSheet } from 'react-native';
import {
  configureTheme,
  CustomButton,
  CustomInput,
  CustomText,
  CustomTag,
} from 'react-native-triveni-component';

// Configure fonts, sizes, and colors only once
configureTheme({
  fontSizes: {
    xxs: 10,
    xs: 12,
    base: 14,
    sm: 16,
    md: 18,
    xl: 20,
    xl2: 24,
    xl4: 40,
    xl3: 48,
  },
  fontFamily: {
    Regular: 'Arial',
    Bold: 'Arial-Bold',
    Medium: 'Arial-Medium',
    SemiBold: 'Arial-SemiBold',
  },
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    disable: '#7C7C7C',
    primary: '#0053FF',
    secondPrimary: '#001644',
    gray: '#7C7C7C',
    error: '#FF0000',
    transparent: 'rgba(0, 0, 0, 0.1)',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CustomLoader /> */}
      <CustomText size="xl">Hello World</CustomText>
      <CustomInput title={'First Name'} placeholder={'First Name'} />
      <CustomButton title="Submit" />
      <CustomTag
        title="Custom"
        tagBackgroundColor="blue"
        textColor="white"
        fontSize="md"
      />
      {/* <CustomImage
        source={{ uri: "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY" }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 10,
  },
});
