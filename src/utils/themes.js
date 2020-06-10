import colors from './colors';
import { primaryFont } from './typography';
const { theme, neutral, yellow, red, green } = colors;

export const defaultTheme = {
    primaryColor: theme[500],
    primaryColorHover: theme['hover'],
    primaryColorActive: theme['active'],
    tertiaryColor: neutral[200],
    textColorOnPrimary: neutral[100],
    textColor: neutral[600],
    textColorInverted: neutral[100],
    primaryFont,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    disabled: neutral[400],
    textOnDisabled: neutral[300],
    borderRadius: '5px',
    lineHeight: '22px',
    body: '#E2E2E2',
    text: '#363537',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
    formElementBackground: neutral[100],
    textOnFormElementBackground: neutral[600],
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
    }
}


export const darkTheme = {
    primaryColor: theme[400],
    primaryColorHover: theme['darkHover'],
    primaryColorActive: theme['darkActive'],
    tertiaryColor: neutral[500],
    textColorOnPrimary: neutral[600],
    textColor: neutral[600],
    textColorInverted: neutral[500],
    primaryFont,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    disabled: neutral[400],
    textOnDisabled: neutral[300],
    borderRadius: '5px',
    lineHeight: '22px',
    body: '#212121',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
    formElementBackground: neutral[100],
    textOnFormElementBackground: '#212121',
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
    }
}