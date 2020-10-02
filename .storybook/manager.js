import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'

addons.setConfig({
  theme: themes.dark,
  // window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
})
