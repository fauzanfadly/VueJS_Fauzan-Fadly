import { pembagian } from "../../src/utils/operations";

describe("Melakukan pembagian", () => {
  test('Pembagian dua bilangan positif', () => {
    expect(pembagian(20, 2)).toBe(10);
  });
  test('Pembagian dua bilangan negatif', () => {
    expect(pembagian(-25, -5)).toBe(5);
  });
  test('Pembagian dua bilangan desimal', () => {
    expect(pembagian(4.5, 1.5)).toBe(3);
  });
})