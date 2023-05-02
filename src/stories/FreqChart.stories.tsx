import { Meta, StoryObj } from '@storybook/react'
import FreqChartV from 'components/FreqBands/FreqChartV'

import * as FA from 'components/FreqBands/FreqencyAllocationTable'

const meta: Meta<typeof FreqChartV> = {
  component: FreqChartV,
  title: 'Frequency Chart'
}
export default meta
type Story = StoryObj<typeof FreqChartV>

export const FreqChart: Story = {
  name: 'Freq Chart 300k',
  storyName: 'Freq Chart 300k',
  args: {
    data: FA.Band300k,
    min: 3E5,
    max: 3E6,
    band: 1
  }
}

export const FreqChart2: Story = {
  name: 'Freq Chart 3M',
  args: {
    data: FA.Band3M,
    min: 3E6,
    max: 3E7,
    band: 2
  }
}

export const FreqChart3: Story = {
  name: 'Freq Chart 30M',
  args: {
    data: FA.Band30M,
    min: 3E7,
    max: 3E8,
    band: 3
  }
}

export const FreqChart4: Story = {
  name: 'Freq Chart 300M',
  args: {
    data: FA.Band300M,
    min: 3E8,
    max: 3E9,
    band: 4
  }
}

export const FreqChart5: Story = {
  name: 'Freq Chart 3G',
  args: {
    data: FA.Band3G,
    min: 3E9,
    max: 3E10,
    band: 5
  }
}

export const FreqChart6: Story = {
  name: 'Freq Chart 30G',
  args: {
    data: FA.Band30G,
    min: 3E10,
    max: 3E11,
    band: 6
  }
}
