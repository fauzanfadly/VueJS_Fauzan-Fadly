import { rataRata } from "../../src/utils/operations";

describe("Melakukan rata-rata", () => {
  test('Rata-rata dua bilangan positif', () => {
    expect(rataRata(4, 5, 6, 5, 5)).toBe(5);
  });
  test('Rata-rata dua bilangan negatif', () => {
    expect(rataRata(-4, -5, -6, -5, -5)).toBe(-5);
  });
  test('Rata-rata dua bilangan desimal', () => {
    expect(rataRata(1.4, 1.5, 1.6, 1.5, 1.5)).toBe(1.5);
  });
})