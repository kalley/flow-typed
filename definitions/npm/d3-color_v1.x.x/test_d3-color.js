// @flow
import { color, rgb, hsl, lab, hcl, cubehelix } from 'd3-color'

const red = color('red')
const hslTest = color({ h: 300, s: 40, l: 50 })
const labTest = color({ l: 50, a: 25, b: -20, opacity: 0.8 })
const hslFromRgb = hsl({ r: 100, g: 50, b: 60 })
const cubehelixFromColor = cubehelix(red)
const hclTest = hcl({ h: 120, c: 40, l: 100 })
;[
  (red, hslTest, labTest, hslFromRgb, cubehelixFromColor, hclTest)
].forEach(colorObj => {
  color(colorObj)
  rgb(colorObj)
  hsl(colorObj)
  lab(colorObj)
  hcl(colorObj)
  cubehelix(colorObj)
})
// $ExpectError
color({ r: 'a', g: 'b', b: 'c' })
// $ExpectError
color({ a: 1, b: 3, c: 7, opacity: 0.5 })
