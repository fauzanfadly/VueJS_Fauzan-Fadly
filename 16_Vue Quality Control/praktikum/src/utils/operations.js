export const penjumlahan = (angka1, angka2) => {
  return angka1 + angka2;
}

export const pengurangan = (angka1, angka2) => {
  return angka1 - angka2;
}

export const pembagian = (angka1, angka2) => {
  return angka1 / angka2;
}

export const perkalian = (angka1, angka2) => {
  return angka1 * angka2;
}

export const rataRata = (angka1, angka2, angka3, angka4, angka5) => {
  const listAngka = [angka1, angka2, angka3, angka4, angka5];
  let total = 0;
  listAngka.map(element => total += element);
  return total / listAngka.length;
}

export const sisaBagi = (angka1, angka2) => {
  return angka1 % angka2;
}

export const luasPersegi = (sisi1, sisi2) => {
  return sisi1 * sisi2;
}

export const luasLingkaran = (phi, r) => {
  return phi * (r * r);
}

export const luasKubus = (jumlahSisi, sisi1, sisi2) => {
  return jumlahSisi * sisi1 * sisi2;
}

export const volumeKubus = (sisi1, sisi2, sisi3) => {
  return sisi1 * sisi2 * sisi3;
}