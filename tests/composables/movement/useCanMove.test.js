import { expect, it } from "vitest";
import { useCanMove } from "../../../js/composables/movement/useCanMove.mjs";

const parse = (n) => parseFloat(n.toFixed(5));

it.each`
  sprite             | speed | direction | result
  ${{ x: 10, y: 3 }} | ${5}  | ${0.1}    | ${{ x: 9.50083, y: -1.97502 }}
  ${{ x: -5, y: 7 }} | ${2}  | ${0.6}    | ${{ x: -6.12928, y: 5.34933 }}
`(
  "calculates 2D movement for $sprite using speed $speed and direction $direction correctly",
  ({ sprite, speed, direction, result }) => {
    let test = Object.assign(
      { sprite },
      useCanMove()
    );

    test.applyForcefromSpeedDirection(speed, direction);
    test.move();
    expect(parse(test.sprite.x)).toBe(parse(result.x));
    expect(parse(test.sprite.y)).toBe(parse(result.y));
  }
);
