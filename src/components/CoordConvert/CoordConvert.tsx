import React, { useState } from 'react'
import DMSDisplay from './DMSDisplay'
import { Button, Stack } from 'react-bootstrap'
import 'index.css'
import './CoordConvert.scss'
import { toast } from 'react-toastify'

export default function CoordConvert() {
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const [result, setResult] = useState({ latitude: '', longitude: '' })

  const submit = (lat: string, lon: string) => {
    if (+lat > 90 || +lat < -90) {
      toast.error('Invalid Latitude', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        toastId: 'latitude'
      })
      return
    }

    if (+lon > 180 || +lon < -180) {
      toast.error('Invalid Longitiude', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        toastId: 'longitude'
      })
      return
    }

    setResult({ latitude: lat, longitude: lon })
  }

  const handleChangeLat = (event) => {
    setLat(event.target.value)
  }

  const handleChangeLon = (event) => {
    setLon(event.target.value)
  }

  return (
    <div className={'widget_choice CoordConvert'}>
      <h4>Convert from Decimal to Degress Minutes Seconds</h4>
      <div className="vertical-stack">
        <div className="horizontal-stack">
          <div>
            <label htmlFor="latitude-text">Latitude</label>
          </div>
          <div>
            <input
              type="text"
              name="lat"
              id="latitude-text"
              defaultValue="29.5"
              value={lat}
              onChange={handleChangeLat}
            />
          </div>

          <div>
            <label htmlFor="longitude-text">Longitude</label>
          </div>
          <div>
            <input
              type="text"
              name="lon"
              id="longitude-text"
              defaultValue="-98.5"
              value={lon}
              onChange={handleChangeLon}
            />
          </div>
        </div>
        <div className="button-row">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              submit(lat, lon)
            }}
          >
            Convert
          </Button>
        </div>

        <DMSDisplay lat={result.latitude} lon={result.longitude} />
      </div>
    </div>
  )
}
