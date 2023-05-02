import { FrequencyAllocation } from 'components/FreqBands/FreqencyAllocationTable'

export const buildData = (data: FrequencyAllocation[], min: number, max: number) => {
  const lbands: number[] = []
  const hbands: number[] = []

  data.forEach((t) => {
    let n1 = t.LowFreq
    if (!lbands.includes(n1)) {
      lbands.push(n1)
    }
    let n2 = t.HighFreq
    if (t.HighFreq < max) {
      if (!hbands.includes(n2)) {
        hbands.push(n2)
      } else {
        hbands.push(max)
      }
    }
  })

  lbands.sort((a, b) => {
    return a - b
  })
  hbands.sort((a, b) => {
    return a - b
  })

  type ServiceBlock = {
    lo: number
    hi: number
    tp: number
    dn: number
    dp: number
    dt: FrequencyAllocation
  }

  const servBlock: ServiceBlock = {
    lo: 0,
    hi: 0,
    tp: 0,
    dn: 0,
    dp: 0,
    dt: {Radio_Service: '', Stn_Class_Code: '', Station_Class: '', LowFreq: 0, HighFreq: 0, Primary_Secondary: ''}
  }

  type BandBlock = {
    lo: number
    hi: number
    servs: ServiceBlock[]
  }

  let blocks: BandBlock[] = []

  const ln = 200

  for (let lp = 0; lp < lbands.length; lp++) {
    const bb: BandBlock = { lo: lbands[lp], hi: hbands[lp], servs: [] }
    blocks.push(bb)
  }

  data.forEach((d) => {
    blocks.forEach((block, i) => {
      if (d.LowFreq >= block.lo && d.HighFreq <= block.hi) {
        let sb:ServiceBlock = Object.create(servBlock)
        sb.dt = d
        sb.tp = 0
        sb.dn = 0
        blocks[i].servs.push(sb)
      }
    })
  })

  blocks.forEach((block, i) => {
    const size = blocks[i].servs.length
    block.servs.forEach((s, ii) => {
      block.servs[ii].tp = ii * Math.trunc(ln / size)
      block.servs[ii].dp = Math.trunc(ln / size)
    })
  })

  let allBlocks: ServiceBlock[] = []

  blocks.forEach((block) => {
    block.servs.forEach((serviceBlock, i) => {
      let nb = serviceBlock
      nb.lo = block.lo
      nb.hi = block.hi
      allBlocks.push(nb)
    })
  })

  return allBlocks
}
