import { luasLingkaran } from "../../src/utils/operations";

describe("Melakukan luas lingkaran", () => {
  test('Luas lingkaran dua bilangan positif', () => {
    expect(luasLingkaran(3.14, 4)).toBe(50.24);
  });
  test('Luas lingkaran dua bilangan negatif', () => {
    expect(luasLingkaran(3.14, -8)).toBe(200.96);
  });
  test('Luas lingkaran dua bilangan desimal', () => {
    expect(luasLingkaran(3.14, -1.5)).toBe(7.065);
  });
})