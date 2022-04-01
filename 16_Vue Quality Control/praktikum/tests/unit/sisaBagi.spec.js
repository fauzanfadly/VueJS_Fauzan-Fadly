import { sisaBagi } from "../../src/utils/operations";

describe("Melakukan sisa bagi", () => {
  test('Sisa bagi dua bilangan positif', () => {
    expect(sisaBagi(5, 4)).toBe(1);
  });
  test('Sisa bagi dua bilangan negatif', () => {
    expect(sisaBagi(-5, -4)).toBe(-1);
  });
  test('Sisa bagi dua bilangan desimal', () => {
    expect(sisaBagi(4.5, 1.5)).toBe(0);
  });
})