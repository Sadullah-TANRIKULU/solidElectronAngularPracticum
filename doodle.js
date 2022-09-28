// pseudocode:
// sipariş al tıkla
// stok kontrol yapıldığını bildir
// stok ok ise köfte mi tavuk mu diye sor
// stok yetersiz ise sipariş iptal
// marul, domates, turşu, soğan seçtiyse hamburger listesine at
// patatesleri kızarttığını bildir
// içecek hazırlandığını bildir
// sos ve ürünlerin tepsiye konduğunu bildir
// servis edildiğini bildir

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
const azPisir = document.querySelector(".az-pisir");
const ortaPisir = document.querySelector(".orta-pisir");
const cokPisir = document.querySelector(".cok-pisir");
let azPisirInput = azPisir.children[1];
let ortaPisirInput = ortaPisir.children[1];
let cokPisirInput = cokPisir.children[1];

const malz = document.querySelector(".malz").children;

const display = document.querySelector(".display");
const malzemeler = [];

let marulSayisi = (domatesSayisi = tursuSayisi = soganSayisi = ekmekSayisi = patatesSayisi = colaSayisi = paketsosSayisi = kofteSayisi = tavukSayisi = 5);

btnKofte.style.visibility = "hidden";
btnTavuk.style.visibility = "hidden";
azPisir.style.display = "none";
ortaPisir.style.display = "none";
cokPisir.style.display = "none";
// btnKofte.disabled = true;
// btnTavuk.disabled = true;

let stokYeterli;
let tavukPisti;
let koftePisti;

function siparisAl() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        for (let i = 1; i < malz.length - 1; i++) {
          if (malz[0].lastElementChild.checked === true) {
            malz[i].lastElementChild.checked = true;
          }
        }
        resolve((display.textContent = "1 - SİPARİŞ ALINIYOR"));
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
            (display.textContent = "2 - STOK YETERLİ")
          );
        } else {
          return reject(
            (stokYeterli = false),
            (display.textContent = "2 - STOK YETERSİZ! SİPARİŞ İPTAL EDİLDİ.")
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
        azPisir.style.display = "flex";
        ortaPisir.style.display = "flex";
        cokPisir.style.display = "flex";

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
            return resolve((display.textContent = "4 - PATATES HAZIR"));
          }, 5000);
        }

        function icecegiHazirla() {
          if (cola.checked === true) {
            setTimeout(() => {
              return (display.textContent = "5 - İÇECEK HAZIR");
            }, 2000);
          } else {
            return (display.textContent = "5 - İÇECEK SİPARİŞ EDİLMEMİŞ");
          }
        }

        function kofteSiparisi() {
          if (azPisirInput.checked === true) {
            setTimeout(() => {
              return (display.textContent =
                "3 - AZ PİŞMİŞ KÖFTE HAZIR"), (koftePisti = true);
            }, 2000);
          } else if (ortaPisirInput.checked === true) {
            setTimeout(() => {
              return (display.textContent =
                "3 - ORTA PİŞMİŞ KÖFTE HAZIR"), (koftePisti = true);
            }, 3000);
          } else if (cokPisirInput.checked === true) {
            setTimeout(() => {
              return (display.textContent =
                "3 - ÇOK PİŞMİŞ KÖFTE HAZIR"), (koftePisti = true);
            }, 4000);
          } else {
            return alert("Lütfen pişme derecesini seçiniz!");
          }
        }

        function tavukSiparisi() {
          setTimeout(() => {
            return (display.textContent = "3 - TAVUK PİŞTİ"), (tavukPisti = true);
          }, 3000);
        }

        btnKofte.addEventListener("click", () => {
          if (
            azPisirInput.checked === true ||
            ortaPisirInput.checked === true ||
            cokPisirInput.checked === true
          ) {
            kofteSayisi -= 1;
            console.log("kalan kofte : ", kofteSayisi);
            btnTavuk.style.visibility = "hidden";
            return kofteSiparisi(), patatesKizart(), icecegiHazirla();
          } else {
            return alert("⁉ Lütfen pişme derecesini seçiniz!");
          }
          // btnKofte.disabled = true;
        });

        btnTavuk.addEventListener("click", () => {
          tavukSayisi -= 1;
          console.log("kalan tavuk : ", tavukSayisi);
          btnKofte.style.visibility = "hidden";
          azPisir.style.display = "none";
          ortaPisir.style.display = "none";
          cokPisir.style.display = "none";
          // btnTavuk.disabled = true;
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
        resolve((display.textContent = "6 - SOS VE HAMBURGER TEPSİYE KONULDU"));
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
        resolve((display.textContent = "7 - MÜŞTERİYE SERVİS EDİLDİ"));
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
    .then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    })
    .catch(err => {
      console.error(err);
    });
});
