import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CoordConvert from './CoordConvert'

describe('<CoordConvert />', () => {
  test('it should mount', () => {
    render(<CoordConvert />)

    const coordConvert = screen.getByTestId('CoordConvert')

    expect(coordConvert).toBeInTheDocument()
  })
})
