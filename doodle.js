const btnSiparis = document.querySelector(".btn-siparis");
const btnKofte = document.querySelector(".btn-kofte");
const btnTavuk = document.querySelector(".btn-tavuk");

const marul = document.querySelector("#marul");
const domates = document.querySelector("#domates");
const tursu = document.querySelector("#tursu");
const sogan = document.querySelector("#sogan");
const ekmek = document.querySelector("#ekmek");
const patates = document.querySelector("#patates");
const cola = document.querySelector("#cola");
const kofte = document.querySelector("#kofte");
const tavuk = document.querySelector("#tavuk");
const paketsos = document.querySelector("#paketsos");
const display = document.querySelector(".display");
const malzemeler = [];

let marulSayisi = 5;
let domatesSayisi = 5;
let tursuSayisi = 5;
let soganSayisi = 5;
let ekmekSayisi = 5;
let patatesSayisi = 5;
let colaSayisi = 5;
let paketsosSayisi = 5;
let kofteSayisi = 5;
let tavukSayisi = 5;

btnKofte.style.visibility = "hidden";
btnTavuk.style.visibility = "hidden";
// btnKofte.disabled = true;
// btnTavuk.disabled = true;

let stokYeterli;
let tavukPisti;

function siparisAl() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve((display.textContent = "SİPARİŞ ALINIYOR"));
      }, 1000);
    } catch (error) {
      reject(console.error(error, "bir şeyler yanlış gitti 😁"));
    }
  });
}

function stokKontrolu() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        if (
          marulSayisi > 0 &&
          domatesSayisi > 0 &&
          tursuSayisi > 0 &&
          ekmekSayisi > 0 &&
          patatesSayisi > 0 &&
          colaSayisi > 0 &&
          paketsosSayisi > 0 &&
          kofteSayisi > 0 &&
          tavukSayisi > 0 &&
          soganSayisi > 0
        ) {
          return resolve(
            (stokYeterli = true),
            (display.textContent = "STOK YETERLİ")
          );
        } else {
          return reject(
            (stokYeterli = false),
            (display.textContent = "STOK YETERSİZ! SİPARİŞ İPTAL EDİLDİ.")
          );
        }
      }, 3000);
    } catch (error) {
      console.error(error, "bir şeyler yanlış gitti 😁");
    }
  });
}

function koftetavukpatoicecek() {
  return new Promise((resolve, reject) => {
    try {
      if (stokYeterli) {
        btnKofte.style.visibility = "visible";
        btnTavuk.style.visibility = "visible";

        if (marul.checked === true) {
          malzemeler.push(marul.value);
          marulSayisi -= 1;
          console.log("kalan marul : ", marulSayisi);
        }
        if (domates.checked === true) {
          malzemeler.push(domates.value);
          domatesSayisi -= 1;
          console.log("kalan domates : ", domatesSayisi);
        }
        if (tursu.checked === true) {
          malzemeler.push(tursu.value);
          tursuSayisi -= 1;
          console.log("kalan tursu : ", tursuSayisi);
        }
        if (sogan.checked === true) {
          malzemeler.push(sogan.value);
          soganSayisi -= 1;
          console.log("kalan sogan : ", soganSayisi);
        }
        if (ekmek.checked === true) {
          malzemeler.push(ekmek.value);
          ekmekSayisi -= 1;
          console.log("kalan ekmek : ", ekmekSayisi);
        }
        if (patates.checked === true) {
          malzemeler.push(patates.value);
          patatesSayisi -= 1;
          console.log("kalan patates : ", patatesSayisi);
        }
        if (cola.checked === true) {
          malzemeler.push(cola.value);
          colaSayisi -= 1;
          console.log("kalan cola : ", colaSayisi);
        }
        if (paketsos.checked === true) {
          malzemeler.push(paketsos.value);
          paketsosSayisi -= 1;
          console.log("kalan paketsos : ", paketsosSayisi);
        }

        function patatesKizart() {
          setTimeout(() => {
            return resolve((display.textContent = "PATATES HAZIR"));
          }, 5000);
        }
        function icecegiHazirla() {
          setTimeout(() => {
            return (display.textContent = "İÇECEK HAZIR");
          }, 2000);
        }
        function kofteSiparisi() {
          setTimeout(() => {
            return (display.textContent = "KÖFTE");
          }, 1000);
        }
        function tavukSiparisi() {
          setTimeout(() => {
            return (display.textContent = "TAVUK");
          }, 1000);
        }

        btnKofte.addEventListener("click", () => {
          kofteSayisi -= 1;
          console.log("kalan kofte : ", kofteSayisi);
          btnKofte.style.visibility = "hidden";
          btnTavuk.style.visibility = "hidden";
          return kofteSiparisi(), patatesKizart(), icecegiHazirla();
        });
        btnTavuk.addEventListener("click", () => {
          tavukSayisi -= 1;
          console.log("kalan tavuk : ", tavukSayisi);
          btnKofte.style.visibility = "hidden";
          btnTavuk.style.visibility = "hidden";
          return tavukSiparisi(), patatesKizart(), icecegiHazirla();
        });
      }
    } catch (error) {
      reject(console.error(error));
    }
  });
}

function sosVeHamburgerTepsiye() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve((display.textContent = "SOS VE HAMBURGER TEPSİYE KONULDU"));
      }, 1000);
    } catch (error) {
      reject(console.error(error, "bir şeyler yanlış gitti 😁"));
    }
  });
}
function servisEt() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve((display.textContent = "MÜŞTERİYE SERVİS EDİLDİ"));
      }, 1000);
    } catch (error) {
      reject(console.error(error, "bir şeyler yanlış gitti 😁"));
    }
  });
}

btnSiparis.addEventListener("click", () => {
  siparisAl()
    .then(stokKontrolu)
    .then(koftetavukpatoicecek)
    .then(sosVeHamburgerTepsiye)
    .then(servisEt)
    .catch(err => {
      console.error(err);
    });
});
