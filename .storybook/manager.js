import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'

addons.setConfig({
  theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? themes.dark : themes.light
})
