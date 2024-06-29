import React from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

type ThemedStatusBarProps = {
  lightColor?: string;
  darkColor?: string;
  lightContent?: boolean;
};

export function ThemedStatusBar({ lightColor, darkColor, lightContent = true }: ThemedStatusBarProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const barStyle: StatusBarStyle = lightContent ? 'light-content' : 'dark-content';

  return (
    <StatusBar
      animated={true}
      backgroundColor={backgroundColor}
      barStyle={barStyle}
    />
  );
}

// Exporta a altura como uma propriedade estática do componente
ThemedStatusBar.height = StatusBar.currentHeight ? StatusBar.currentHeight : 0;