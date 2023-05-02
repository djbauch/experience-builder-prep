export const colorForStationClass = (stationClass: string) => {
  switch (stationClass) {
    case 'Space':
    case 'EJ':
      return '#82bfe0'
    case 'Aeronautical':
    case 'FD':
      return '#179be3'
    default:
      return '#dddddd'
  }
}
export const textColorForService = (serviceName: string) => {
  switch (serviceName) {
    case 'Aeronautical Mobile':
    case 'Aeronautical Mobile-Satellite':
    case 'Radiolocation':
    case 'Fixed-Satellite':
    case 'Mobile-Satellite':
    case 'Maritime Mobile':
    case 'Meteorological Aids':
      return '#000'
    case 'Land Mobile':
    case 'Aeronautical Radionavigation':
      return '#fff'

    default:
      return '#111'
  }
}
export const colorForService = (serviceName: string) => {
  switch (serviceName) {
    case 'Aeronautical Mobile':
      return '#179be3'

    case 'Aeronautical Mobile-Satellite':
      return '#82bfe0'

    case 'Aeronautical Radionavigation':
      return '#9e2310'

    case 'Amature':
      return '#0c6e1b'

    case 'Earth Exploration-Satellite':
      return '#b8715a'

    case 'Fixed':
      return '#a62966'

    case 'Maritime Mobile':
      return '#ccc799'

    case 'Maritime Radionavigation':
      return '#346b4e'

    case 'Radiolocation':
      return '#f2c627'

    case 'Radionavigation':
      return '#8da882'

    case 'Fixed-Satellite':
      return '#b569cf'

    case 'Inter-Satellite':
      return '#d4d257'

    case 'Land Mobile':
      return '#155961'

    case 'Land Mobile-Satellite':
      return '#4db8c4'

    case 'Maritime Mobile-Satellite':
      return '#9dc9b2'

    case 'Meteorological-Satellite':
      return '#8a5646'

    case 'Meteorological Aids':
      return '#f0d2cc'

    case 'Mobile-Satellite':
      return '#ab59c2'

    case 'Radiodetermination-Satellite':
      return '#f28d27'

    case 'Radionavigation-Satellite':
      return '#cfdb72'

    case 'Space Operation':
      return '#87302b'

    case 'Space Research':
      return '#f2acc5'

    default:
      return '#dddddd'
  }
}
export default colorForService
