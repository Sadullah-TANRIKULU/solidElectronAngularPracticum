// // pseudocode:
// // sipariş al tıkla
// // stok kontrol yapıldığını bildir
// // stok ok ise köfte mi tavuk mu diye sor
// // stok yetersiz ise sipariş iptal
// // marul, domates, turşu, soğan seçtiyse hamburger listesine at
// // patatesleri kızarttığını bildir
// // içecek hazırlandığını bildir
// // sos ve ürünlerin tepsiye konduğunu bildir
// // servis edildiğini bildir
// let stokYeterli;
// const btnSiparis = document.querySelector(".btn-siparis");
// const btnKofte = document.querySelector(".btn-kofte");
// const btnTavuk = document.querySelector(".btn-tavuk");

// const marul = document.querySelector("#marul");
// const domates = document.querySelector("#domates");
// const tursu = document.querySelector("#tursu");
// const sogan = document.querySelector("#sogan");
// const ekmek = document.querySelector("#ekmek");
// const patates = document.querySelector("#patates");
// const cola = document.querySelector("#cola");
// const kofte = document.querySelector("#kofte");
// const tavuk = document.querySelector("#tavuk");
// const paketsos = document.querySelector("#paketsos");
// const malzemeler = [];

// let marulSayisi = 5;
// let domatesSayisi = 5;
// let tursuSayisi = 5;
// let soganSayisi = 5;
// let ekmekSayisi = 5;
// let patatesSayisi = 5;
// let colaSayisi = 5;
// let paketsosSayisi = 5;
// let kofteSayisi = 5;
// let tavukSayisi = 5;

// btnKofte.style.visibility = "hidden";
// btnTavuk.style.visibility = "hidden";

// let tavukPisti;

// const stokKontrolu = () => {
//   console.log("stokKontroluYapılıyor...");
//   setTimeout(() => {
//     if (
//       marulSayisi > 0 &&
//       domatesSayisi > 0 &&
//       tursuSayisi > 0 &&
//       ekmekSayisi > 0 &&
//       patatesSayisi > 0 &&
//       colaSayisi > 0 &&
//       paketsosSayisi > 0 &&
//       kofteSayisi > 0 &&
//       tavukSayisi > 0 &&
//       soganSayisi > 0
//     ) {
//       console.log("stok yeterli");
//       stokYeterli = true;
//     } else {
//       console.log(
//         "Malzeme stoğu yetersiz! Sipariş iptal edildi. Buton disable edildi."
//       );
//       stokYeterli = false;
//     }
  
//     if (stokYeterli) {
//       btnKofte.style.visibility = "visible";
//       btnTavuk.style.visibility = "visible";
  
//       const kofteSiparisi = () => {
//         setTimeout(() => {
          
//           console.log("kofte az Pisiriliyor...");
//         }, 2000);
//         koftePisti = true;
//           kofteSayisi -= 1;
//           console.log("kalan kofte : ", kofteSayisi);
//       };
//       const tavukSiparisi = () => {
//         console.log("tavukPisiriliyor...");
//         tavukPisti = true;
//           tavukSayisi -= 1;
//           console.log("kalan tavuk : ", tavukSayisi);
//       };
//       const patatesKizart = () => {
//         console.log("patatesKizartiliyor...");
//       };
//       const icecegiHazirla = () => {
//         console.log("icecegiHazirlaniyor...");
//       };
//       const sosVeHamburgerTepsiye = () => {
//         console.log("sosVeHamburgerTepsiye");
//       };
//       const servisEt = () => {
//         console.log("servisEt");
//       };
  
//       if (marul.checked === true) {
//         malzemeler.push(marul.value);
//         marulSayisi -= 1;
//         console.log("kalan marul : ", marulSayisi);
//       }
//       if (domates.checked === true) {
//         malzemeler.push(domates.value);
//         domatesSayisi -= 1;
//         console.log("kalan domates : ", domatesSayisi);
//       }
//       if (tursu.checked === true) {
//         malzemeler.push(tursu.value);
//         tursuSayisi -= 1;
//         console.log("kalan tursu : ", tursuSayisi);
//       }
//       if (sogan.checked === true) {
//         malzemeler.push(sogan.value);
//         soganSayisi -= 1;
//         console.log("kalan sogan : ", soganSayisi);
//       }
//       if (ekmek.checked === true) {
//         malzemeler.push(ekmek.value);
//         ekmekSayisi -= 1;
//         console.log("kalan ekmek : ", ekmekSayisi);
//       }
//       if (patates.checked === true) {
//         malzemeler.push(patates.value);
//         patatesSayisi -= 1;
//         console.log("kalan patates : ", patatesSayisi);
//       }
//       if (cola.checked === true) {
//         malzemeler.push(cola.value);
//         colaSayisi -= 1;
//         console.log("kalan cola : ", colaSayisi);
//       }
//       if (paketsos.checked === true) {
//         malzemeler.push(paketsos.value);
//         paketsosSayisi -= 1;
//         console.log("kalan paketsos : ", paketsosSayisi);
//       }
  
//       btnKofte.addEventListener("click", () => {
//         kofteSiparisi();
//         patatesKizart();
//         icecegiHazirla();
//         if (koftePisti) {
//           sosVeHamburgerTepsiye();
//           servisEt();
//         }
//       });
//       btnTavuk.addEventListener("click", () => {
//         tavukSiparisi();
//         patatesKizart();
//         icecegiHazirla();
//         if (tavukPisti) {
//           sosVeHamburgerTepsiye();
//           servisEt();
//         }
//       });
//     } else {
//       console.log("Stok yetersiz, sipariş iptal");
//     }
//   }, 3000);

  

//   console.log("içine konacak malzemeler", malzemeler);
// };

// btnSiparis.addEventListener("click", () => {
//   siparisAl();
//   stokKontrolu();
// });
