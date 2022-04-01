import { pengurangan } from "../../src/utils/operations";

describe("Melakukan pengurangan", () => {
  test('Pengurangan dua bilangan positif', () => {
    expect(pengurangan(15, 5)).toBe(10);
  });
  test('Pengurangan dua bilangan negatif', () => {
    expect(pengurangan(-7, -2)).toBe(-5);
  });
  test('Pengurangan dua bilangan desimal', () => {
    expect(pengurangan(7.4, 4.4)).toBe(3);
  });
})