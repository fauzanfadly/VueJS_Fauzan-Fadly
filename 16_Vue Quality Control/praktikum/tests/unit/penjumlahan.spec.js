import { penjumlahan } from "../../src/utils/operations";

describe("Melakukan penjumlahan", () => {
  test('Penjumlahan dua bilangan positif', () => {
    expect(penjumlahan(5, 5)).toBe(10);
  });
  test('Penjumlahan dua bilangan negatif', () => {
    expect(penjumlahan(-2, -3)).toBe(-5);
  });
  test('Penjumlahan dua bilangan non numerik', () => {
    expect(penjumlahan("10", "0")).toBe("100");
  });
})