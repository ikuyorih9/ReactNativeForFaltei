/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#FFF';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    tabBackground: '#2D3856',

    /* Percent colors */
    safesafe: '#00CC00',
    safe: '#75EA00',
    safewarning: '#FFFF66',
    warning: '#FFCC00',
    hardwaring: '#FF5E00',
    danger: '#FF0000',
    dead: '#ACACAC',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    tabBackground: '#2D3856',

    /* Percent colors */
    safesafe: '#00CC00',
    safe: '#75EA00',
    safewarning: '#FFFF66',
    warning: '#FFCC00',
    hardwaring: '#FF5E00',
    danger: '#FF0000',
    dead: '#ACACAC',
  },
};
