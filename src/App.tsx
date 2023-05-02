import { Routes, Route } from 'react-router-dom'
import CoordConvert from 'components/CoordConvert/CoordConvert'
import * as FA from 'components/FreqBands/FreqencyAllocationTable'
import FreqChart from 'components/FreqBands/FreqChartV'
import FreqChart3M from 'components/FreqBands/FreqChart3M'
/*
import Distances from './components/Distances/Distances'
import DmsConvert from './components/DmsConvert/DmsConvert'
import LinearDb from './components/LinearDb/LinearDb'
import PowerConvert3 from './components/PowerConvert3/PowerConvert3'
import RadioLos from './components/RadioLos/RadioLos'
import SpaceAttenuation from './components/SpaceAttenuation/SpaceAttenuation'
import WaveLength from './components/WaveLength/WaveLength'
import RcsSuper from './components/rcs-fix'
import LosTool from './components/LosTool/LosTool'
*/
import Root from 'routes/Root'
const FreqChart300k = () => <FreqChart data={FA.Band300k} min={3E5} max={3E6} band={1}/>
const FreqChart30M = () => <FreqChart data={FA.Band30M} min={3E7} max={3E8} band={3}/>
const FreqChart300M = () => <FreqChart data={FA.Band300M} min={3E8} max={3E9} band={4}/>
const FreqChart3G = () => <FreqChart data={FA.Band3G} min={3E9} max={3E10} band={5}/>
const FreqChart30G = () => <FreqChart data={FA.Band30G} min={3E10} max={3E11} band={6}/>
const AllCharts = () => (
  <>
  <FreqChart300k />
  <FreqChart3M />
  <FreqChart30M />
  <FreqChart300M />
  <FreqChart3G />
  <FreqChart30G />
  </>
)
export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="fc300k" element={<FreqChart300k />} />
          <Route path="fc3M" element={<FreqChart3M />} />
          <Route path="fc30M" element={<FreqChart30M />} />
          <Route path="fc300M" element={<FreqChart300M />} />
          <Route path="fc3G" element={<FreqChart3G />} />
          <Route path="fc30G" element={<FreqChart30G />} />
          <Route path="allCharts" element={<AllCharts />} />
          <Route path="coordconvert" element={<CoordConvert />} />
          {/* }
        <Route path="distances" element={<Distances />} />
        <Route path="lostool" element={<LosTool />} />
        <Route path="radiolos" element={<RadioLos />} />

        <Route path="dmsconvert" element={<DmsConvert />} />
        <Route path="rcssuper" element={<RcsSuper />} />
        <Route path="linerardb" element={<LinearDb />} />
        <Route path="spaceattenuation" element={<SpaceAttenuation />} />
        <Route path="wavelength" element={<WaveLength />} />
        <Route path="powerconvert" element={<PowerConvert3 />} />
  */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
