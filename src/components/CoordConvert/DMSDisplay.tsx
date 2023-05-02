import * as React from 'react'

type DMSDisplayProps = {
  lat: string
  lon: string
}

export const DMSDisplay: React.FC<DMSDisplayProps> = ({ lat, lon }: DMSDisplayProps) => {
  let ladeg = Math.abs(parseInt(lat))
  let dec = Math.abs(+lat) - ladeg
  let lamin = 60 * dec
  let lasec = Math.round(1000 * ((60 * dec) % 1) * 60) / 1000

  const format = (n: number) => {
    const p = Math.abs(n)
    if (p < 10) {
      return '0' + p
    } else {
      return '' + p
    }
  }

  if (lasec >= 60) {
    lamin++
    lasec = 0
  }

  if (lamin >= 60) {
    ladeg++
    lamin = 0
  }

  if (lasec <= -60) {
    lamin--
    lasec = 0
  }

  if (lamin <= -60) {
    ladeg--
    lamin = 0
  }
  let lodeg = Math.abs(parseInt(lon))
  let ldec = Math.abs(+lon) - lodeg
  let lomin = 60 * ldec
  let losec = Math.round(1000 * ((60 * ldec) % 1) * 60) / 1000

  if (losec >= 60) {
    lomin++
    losec = 0
  }

  if (lomin >= 60) {
    lodeg++
    lomin = 0
  }

  const ns = +lat >= 0 ? 'N' : 'S'
  const ew = +lon >= 0 ? 'E' : 'W'

  return (
    <div>
      <span>
        {isNaN(ladeg) ? ' ' : `${ladeg}°${format(lamin)}'${format(lasec)}"${ns}`}&nbsp;&nbsp;
        {isNaN(lodeg) ? ' ' : `${lodeg}°${format(lomin)}'${format(losec)}"${ew}`}
      </span>
    </div>
  )
}
export default DMSDisplay
