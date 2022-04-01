import { perkalian } from "../../src/utils/operations";

describe("Melakukan perkalian", () => {
  test('Perkalian dua bilangan positif', () => {
    expect(perkalian(2, 5)).toBe(10);
  });
  test('Perkalian dua bilangan negatif', () => {
    expect(perkalian(-3, -3)).toBe(9);
  });
  test('Perkalian dua bilangan desimal', () => {
    expect(perkalian(3, 1.5)).toBe(4.5);
  });
})