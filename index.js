const R = require('ramda')
const xMax = 400
const YMax = 400

const rand = (high, low) => Math.random() + (high - low) + low
const randomPoints = R.range(0,100).map(_ => ({
    x: rand(0, xMax),
    y: rand(0, YMax)
}))

const team = point => point.x > point.y ? 1 : -1