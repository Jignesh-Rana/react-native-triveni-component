import { View, StyleSheet } from 'react-native';
import { configureThem, CustomButton } from 'react-native-triveni-component';

// Configure fonts, sizes, and colors only once
configureThem({
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
    background: '#FAFAFA',
    lightMediumGray: '#F1F1F1',
    lightGray: '#D0D0D0',
    gray: '#7C7C7C',
    grayBold: '#373737',
    gray50: '#EFEFEF',
    blue: '#0053FF',
    blue2: '#003DBB',
    skyBlue: '#8DC8FF',
    red: '#C02E2E',
    red2: '#BB2222',
    yellow: '#DC9E00',
    yellow2: '#C38D01',
    green: '#2EC06F',
    green2: '#28B667',
    alert: '#EB001B',
    confirm: '#30624A',
    gradientTotal1: '#2EC06F',
    gradientTotal2: '#0053FF',
    gradientPartial1: '#0053FF',
    gradientPartial2: '#DC9E00',
    gradientBlue1: '#B5CDFF',
    gradientBlue2: '#FAFAFA',
    darkBlue: '#001644',
    transparent: 'rgba(0, 0, 0, 0.1)',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <CustomButton title="Submit" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
