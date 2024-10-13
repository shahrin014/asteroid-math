import { expect, it } from "vitest";
import { useCanControlUsingKeyboard } from "../../../js/composables/input/useCanControlUsingKeyboard.mjs";
it.each`
  testedControl      | result
  ${{ left: true }}  | ${true}
  ${{ up: true }}    | ${true}
  ${{ left: false }} | ${false}
  ${{ up: false }}   | ${false}
`("returns true if is being controlled", ({ testedControl, result }) => {
  let test = Object.assign({}, useCanControlUsingKeyboard());
  test = {
    ...test,
    controls: {
      ...test.controls,
      ...testedControl,
    },
  };
  console.log(test.controls);
  expect(test.isControlled()).toBe(result);
});
