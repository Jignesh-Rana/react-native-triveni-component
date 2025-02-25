type ThemeConfig = {
  fontSizes: Record<string, number>;
  fontFamily: Record<string, string>;
  colors: Record<string, string>;
};

// CustomTextConfig.ts
const defaultConfig: ThemeConfig = {
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
    Bold: 'Inter-Bold',
    SemiBold: 'Inter-SemiBold',
    Medium: 'Inter-Medium',
    Regular: 'Inter-Regular',
  },
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    gray: '#808080',
  },
};

let CustomTextConfig = { ...defaultConfig };

// Allow users to update the configuration
export const configureThem = (config: Partial<typeof defaultConfig>) => {
  CustomTextConfig = { ...CustomTextConfig, ...config };
};

// Export the configuration for use in components
export const getCustomThemConfig = () => CustomTextConfig;
