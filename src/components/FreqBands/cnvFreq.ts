export const ConvFreq = (freq: number, showUnits: boolean = true) => {
  let formattedFreq =  freq / 1E9 + (showUnits ? ' GHz' : '')
  if (freq < 2e6) {
    formattedFreq = freq / 1E3 + (showUnits ? ' kHz' : '')
  } else if (freq <= 2e8) {
    formattedFreq = freq / 1E6 + (showUnits ? ' MHz' : '')
  }
  if (formattedFreq === '0.3 GHz') {
    formattedFreq = '300 MHz'
  }
  return formattedFreq
}