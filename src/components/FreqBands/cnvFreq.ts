export const ConvFreq = (freq: number, showUnits: boolean = true) => {
  if (freq < 2e6) {
    return freq / 1E3 + (showUnits ? ' kHz' : '')
  }

  if (freq <= 2e8) {
    return freq / 1E6 + (showUnits ? ' MHz' : '')
  }

  return freq / 1E9 + (showUnits ? ' GHz' : '')
}
