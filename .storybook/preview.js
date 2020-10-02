import React, { Suspense } from 'react'
import i18n from '../src/i18n'
import { I18nextProvider } from 'react-i18next';
import '@storybook/addon-console';

const withConsole = (Story, context) => {
  return (
    <Story {...context} />
  )
}

const withThemeProvider = (Story, context) => {
  i18n.changeLanguage(context.globals.locale)

  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>Loading</div>}>
        <Story {...context} />
      </Suspense>
    </I18nextProvider>
  )
}
export const decorators = [withThemeProvider , withConsole];

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'de',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'de', right: '🇩🇪', title: 'Deutsch' },
      ],
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: { viewports: {
  third: {
    name: 'Third of a Page',
    styles: {
      width: '346px',
      height: '500px',
    },
  },
  half: {
    name: 'Half a Page',
    styles: {
      width: '556px',
      height: '800px',
    },
  },
  twoThirds: {
    name: 'Two Thirds of a Page',
    styles: {
      width: '1166px',
      height: '900px',
    },
  },
} },
  backgrounds: {
    default: 'Staffbase',
    values: [
        { 
            name: 'Staffbase', 
            value: '#f5f3f2'
        },
      ],
  }
}
