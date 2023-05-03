import React, { useState } from 'react'
import * as d3 from 'd3'
import { Button } from 'react-bootstrap'
import './FrequencyBand.scss'
import { useD3 } from 'hooks/useDthree'
import { buildData } from './mkBands2'
import { colorForService, textColorForService } from './mkColor'
import { ConvFreq } from './cnvFreq'

export default function FreqChartV({ data, min, max, band, redVerticals = false, showBandHeader = true }) {
  const [zoom, setZoom] = React.useState(100)
  const handleKeyUp = (e) => {
    if (e.key === '+') {
      setZoom(zoom + 0.1)
    } else if (e.key === '-') {
      setZoom(Math.min(zoom - 0.1, 0.1))
    }
    console.log(`Zoom: ${zoom} `)
    console.log(JSON.stringify(e))
  }
  const handlePlus = () => {
    setZoom(zoom + 10)
  }
  const handleMinus = () => {
    setZoom(Math.max(zoom - 10, 10))
  }

  const ref = useD3(
    (svg) => {
      const sWidth = 3600

      const margin = {
        top: 20,
        right: 15,
        left: 20,
        bottom: 20
      }

      const chartHeight = 280 - margin.top - margin.bottom
      const chartWidth = 5000 - margin.left - margin.right

      const dif = max - min

      const Scale = d3.scaleLog().domain([min, max]).range([margin.left, sWidth])

      const graph = d3
        .select('.plotArea' + band)
        .append('svg')
        .attr('width', chartWidth)
        .attr('height', chartHeight - 5)

      //const topLine =
      d3.select('.Scale' + band)
        .append('line')
        .style('stroke', 'black')
        .attr('x1', margin.top)
        .attr('x2', sWidth)
        .attr('y1', 55)
        .attr('y2', 55)

      //const botLine =
      d3.select('.Scale' + band)
        .append('line')
        .style('stroke', 'black')
        .attr('x1', margin.top)
        .attr('x2', sWidth)
        .attr('y1', 235)
        .attr('y2', 235)

      const dx = buildData(data, min, max)

      const fkLines = graph.selectAll('g').data(dx).enter().append('g')

      //const minBox =
      d3.select('.Scale' + band)
        .append('line')
        .style('stroke', 'black')
        .attr('x1', margin.left)
        .attr('x2', margin.left)
        .attr('y1', 50)
        .attr('y2', 235)

      //const minNum =
      d3.select('.Scale' + band)
        .append('text')
        .text(ConvFreq(min))
        .attr('x', Scale(min))
        .attr('y', 250)

      //const maxBox =
      d3.select('.Scale' + band)
        .style('stroke', 'black')
        .append('line')
        .attr('x1', sWidth)
        .attr('x2', sWidth)
        .attr('y1', 50)
        .attr('y2', 235)

      //const maxNum =
      d3.select('.Scale' + band)
        .append('text')
        .text(ConvFreq(max))
        .attr('x', sWidth)
        .attr('y', 250)

      fkLines
        .append('line')
        .style('stroke', 'green')
        .attr('x1', (d) => Scale(d.hi))
        .attr('x2', (d) => Scale(d.hi))
        .attr('y1', 55)
        .attr('y2', 250)

      if (redVerticals) {
        fkLines
          .append('line')
          .style('stroke', 'red')
          .attr('x1', (d) => Scale(d.lo))
          .attr('x2', (d) => Scale(d.lo))
          .attr('y1', 55)
          .attr('y2', 250)
      }

      let prev = 0
      fkLines
        .append('text')
        //.style("stroke","red")
        .style('font', '9px sans')
        .style('text-anchor', 'start')
        .text((d) => {
          if (d.lo === min) {
            return ' '
          }
          if (d.lo > prev + dif / 80) {
            prev = d.lo
            return ConvFreq(d.lo, false)
          }
          return ''
        })
        .attr('transform', (d, i) => {
          return 'translate( ' + Scale(d.lo) + ' , ' + 50 + '),' + 'rotate(-90,0,0)'
        })

      prev = 0

      fkLines
        .append('text')
        .style('font', '9px sans')
        .text((d) => {
          if (d.hi === max) {
            return ' '
          }
          if (d.hi > prev + dif / 80) {
            prev = d.hi
            return ConvFreq(d.hi, false)
          }
          return ''
        })
        .attr('transform', (d, i) => {
          return 'translate( ' + Scale(d.hi) + ' , ' + 50 + '),' + 'rotate(-90,0,0)'
        })

      let toolTip = d3
        .select(`#BandContainer${band}`)
        .append('div')
        .style('top', 200)
        .style('left', 50)
        .style('position', 'absolute')
        .style('z-index', '100')
        .style('opacity', 0)
        .style('background', '#dddddd')
        .style('border', 'solid')
        .text('a simple tooltip')
        .style('padding', '4px')

      const freqBox = graph.selectAll('g').data(dx).append('g')
      freqBox
        .append('rect')
        .style('fill', (d) => colorForService(d.dt.Radio_Service))
        .attr('x', (d) => Scale(d.lo))
        .attr('width', (d) => Scale(d.hi) - Scale(d.lo))
        .attr('y', (d) => 55 + d.tp)
        .attr('height', (d) => d.dp)

        .on('mouseover', (e, d) => {
          toolTip
            .style('background-color', colorForService(d.dt.Radio_Service))
            .style('color', textColorForService(d.dt.Radio_Service))
            .html(
              `<div class="tip"><p>${d.dt.Radio_Service}</p><p>Class Code: ${d.dt.Stn_Class_Code}</p><p>Class: ${
                d.dt.Station_Class
              }</p><p>${ConvFreq(d.dt.LowFreq, false)} to ${ConvFreq(d.dt.HighFreq)}</p><p>${
                d.dt.Primary_Secondary
              }</p></div>`
            )
            .style('top', e.pageY + 'px')
            .style('left', e.pageX + 'px')
            .style('opacity', 1)
        })
        .on('mousemove', (e) => {
          toolTip
            .transition()
            .duration(100)
            .style('top', e.pageY + 'px')
            .style('left', e.pageX + 'px')
        })
        .on('mouseout', (e) => {
          return toolTip.transition().duration(800).style('opacity', 0)
        })
    },
    [data.length]
  )

  const [showControls, setShowControls] = useState(false)
  const handleMouseIn = () => {
    setShowControls(true)
  }
  const handleMouseLeave = () => {
    setShowControls(false)
  }

  return (
    <div className="BandContainer" id={`BandContainer${band}`}>
      {showBandHeader ? (
        <h4 className="band-header" onMouseEnter={handleMouseIn}>
          {ConvFreq(min)} - {ConvFreq(max)}
          {showControls ? (
            <div className="freq-zoom-controls" onMouseLeave={handleMouseLeave}>
              <Button size="sm" onClick={handleMinus}>
                <b>-{' '}</b>
              </Button>{' '}
              Zoom: {zoom}%{' '}
              <Button size="sm" onClick={handlePlus}>
                <b>+{' '}</b>
              </Button>{' '}
            </div>
          ) : (
            <div />
          )}
        </h4>
      ) : null}
      <div className="FrequencyBand" id={`FrequencyBand${band}`} onKeyUp={handleKeyUp}>
        <svg
          ref={ref}
          style={{
            height: 258,
            width: '270%',
            marginRight: '5px',
            marginLeft: '5px',
            zoom: zoom + '%'
          }}
        >
          <g className={'plotArea' + band} />
          <g className={'Scale' + band} />
        </svg>
      </div>
    </div>
  )
}
