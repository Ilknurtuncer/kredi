const gelir = +prompt("gelirini gir");
const gider = +prompt("giderini gir");
const asgari = 5.500;
let sonuc =
  gelir - gider < asgari ? "kredi verilemez😥" : " krediye uygundur😀";
console.log(sonuc);
alert(sonuc);