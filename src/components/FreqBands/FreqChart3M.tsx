import * as React from 'react'
import FreqChart from './FreqChartV'
import * as FA from 'components/FreqBands/FreqencyAllocationTable'
export const FreqChart3M = () =>
  <FreqChart data={FA.Band3M} min={3E6} max={3E7} band={2}/>
export default FreqChart3M