import colors from 'vuetify/es5/util/colors'

const colorModel = {
  sideBarColor: {
    light: colors.orange.darken1,
    dark: colors.grey.darken3
  },
  appBarColor: {
    light: colors.deepOrange,
    dark: colors.dark
  },
  iconDrawer: {
    light: colors.shades.white,
    dark: colors.orange
  },
  btnOutline: {
    light: colors.deepOrange,
    dark: colors.deepOrange
  },
  btn: {
    light: colors.deepOrange,
    dark: colors.deepOrange
  }
}

export const lightPallete = {}
export const darkPallete = {}

for (const key in colorModel) {
  if (colorModel[key].light != null && colorModel[key].dark != null) {
    lightPallete[key] = colorModel[key].light
    darkPallete[key] = colorModel[key].dark
  } else if (colorModel[key].light != null) {
    lightPallete[key] = colorModel[key].light
  } else if (colorModel[key].dark != null) {
    darkPallete[key] = colorModel[key].dark
  } else if (colorModel[key].light == null && colorModel[key].dark == null) {
    lightPallete[key] = colorModel[key]
    darkPallete[key] = colorModel[key]
  }
}
