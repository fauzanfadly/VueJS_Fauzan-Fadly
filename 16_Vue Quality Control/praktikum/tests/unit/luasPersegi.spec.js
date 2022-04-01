import { luasPersegi } from "../../src/utils/operations";

describe("Melakukan luas persegi", () => {
  test('Luas persegi dua bilangan positif', () => {
    expect(luasPersegi(11, 11)).toBe(121);
  });
  test('Luas persegi dua bilangan negatif', () => {
    expect(luasPersegi(-11, -11)).toBe(121);
  });
  test('Luas persegi dua bilangan desimal', () => {
    expect(luasPersegi(1.1, 2.5)).toBe(2.75);
  });
})