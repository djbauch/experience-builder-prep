import { Meta, StoryObj } from '@storybook/react'
import CoordConvert from './CoordConvert'

const meta: Meta<typeof CoordConvert> = {
  title: 'CoordConvert',
  component: CoordConvert
}

export default meta
type Story = StoryObj<typeof CoordConvert>

export const Default: Story = {
  args: {
    name: 'Default'
  }
}
