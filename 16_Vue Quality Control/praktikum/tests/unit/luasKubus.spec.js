import { luasKubus } from "../../src/utils/operations";

describe("Melakukan luas kubus", () => {
  test('Luas kubus dua bilangan positif', () => {
    expect(luasKubus(6, 12, 12)).toBe(864);
  });
  test('Luas kubus dua bilangan negatif', () => {
    expect(luasKubus(6, -17, -17)).toBe(1734);
  });
  test('Luas kubus dua bilangan desimal', () => {
    expect(luasKubus(6, 2.5, 1.1)).toBe(16.5);
  });
})