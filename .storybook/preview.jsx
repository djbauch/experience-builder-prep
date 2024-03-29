import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
//import { withRouter } from 'storybook-addon-react-router-v6'

// Import custom CSS
import '../src/scss/styles.scss'
// Import all of Bootstrap's AJS
import * as bootstrap from 'bootstrap'

import ThemeProvider from 'react-bootstrap/ThemeProvider'

import '@fontsource/roboto'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import 'react-toastify/dist/ReactToastify.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },

  backgrounds: {
    default: 'Plum',
    values: [
      {
        name: 'White',
        value: '#FFFFFF'
      },
      {
        name: 'Honeydew',
        value: '#F0FFF0'
      },
      {
        name: 'AliceBlue',
        value: '#F0F8FF'
      },

      {
        name: 'Plum',
        value: '#DDA0DD'
      },

      {
        name: 'AntiqueWhite',
        value: '#FAEBD7'
      },
      {
        name: 'Aqua',
        value: '#00FFFF'
      },
      {
        name: 'LightGray',
        value: '#D3D3D3'
      },

      {
        name: 'Indigo',
        value: '#727cf5'
      },
      {
        name: 'Purple',
        value: '#6b5eae'
      },
      {
        name: 'Orange',
        value: '#fd7e14'
      },
      {
        name: 'Gray',
        value: '#748194'
      },
      {
        name: 'Red',
        value: '#FF0000'
      },
      {
        name: 'Black',
        value: '#000000'
      }
    ]
  }
}

export const decorators = [
  //withRouter,
  (Story) => {
    return (
      <BrowserRouter>
        <ThemeProvider>
          <ToastContainer />
          <Story />
        </ThemeProvider>
      </BrowserRouter>
    )
  }
]
