import { volumeKubus } from "../../src/utils/operations";

describe("Melakukan volume kubus", () => {
  test('Volume kubus dua bilangan positif', () => {
    expect(volumeKubus(3, 3, 3)).toBe(27);
  });
  test('Volume kubus dua bilangan negatif', () => {
    expect(volumeKubus(-7, -7, -7)).toBe(-343);
  });
  test('Volume kubus dua bilangan desimal', () => {
    expect(volumeKubus(2.5, 2.5, 2.5)).toBe(15.625);
  });
})