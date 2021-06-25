// @flow

import * as React from "react"

import Sketch from "react-p5"

function findRadiusOfNextCircle(a, b, c) {
  return 1 / (a + b + c + 2 * Math.sqrt(a * b + b * c + c * a))
}

function equilateralTriangle(p5, startingPointX, startingPointY, length) {
  p5.triangle(
    startingPointX,
    startingPointY,
    startingPointX + length,
    startingPointY,
    startingPointX + length * 0.5,
    startingPointY - Math.sqrt(3 / 4) * length
  )
}

const SIZE = 100

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"

function Circles(): React.Node {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(SIZE, SIZE).parent(canvasParentRef)
    draw(p5)
    p5.frameRate(1)
  }

  const draw = p5 => {
    const center = { x: SIZE / 2, y: SIZE / 2 + 3 }

    const radius = SIZE / 6

    p5.fill("orange")
    equilateralTriangle(
      p5,
      center.x - radius * 2,
      center.y + radius * 1.3,
      radius * 4
    )

    p5.fill("yellow")
    p5.circle(center.x, center.y, radius * 2)

    p5.fill("pink")
    const secondRadius = Math.random() * (radius / 2) * 2
    const thirdRadius = Math.random() * (radius / 2) * 2
    p5.circle(center.x - radius / 2, center.y, secondRadius)
    p5.circle(center.x + radius / 2, center.y, thirdRadius)

    const newRadius = findRadiusOfNextCircle(
      1 / radius,
      1 / secondRadius,
      1 / thirdRadius
    )
    p5.fill("orange")
    p5.circle(center.x, center.y + radius - newRadius, newRadius * 2)
    p5.circle(center.x, center.y - radius + newRadius, newRadius * 2)
  }

  if (!isBrowser) return <a style={{ width: 100, height: 100 }} />

  return (
    <a href="https://github.com/James-E-Adams/jamesadams.xyz/blob/master/src/components/Circles.js">
      <Sketch setup={setup} draw={draw} />
    </a>
  )
}

export default Circles
