const btnSiparis = document.querySelector(".btn-siparis");

function firstFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("first function"));
    }, 1500);
  });
}

function containerFunction() {
  return new Promise((resolve, reject) => {
    function a1() {
      setTimeout(() => {
        return console.log("a1");
      }, 1000);
    }

    function a2() {
      setTimeout(() => {
        return console.log("a2");
      }, 500);
    }

    function a3() {
      setTimeout(() => {
        return console.log("a3");
      }, 700);
    }

    btnSiparis.addEventListener("click", () => {
      return resolve(a1(), a2(), a3());
    });
  });
}

function lastFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("last function"));
    }, 1000);
  });
}

firstFunc().then(containerFunction).then(lastFunc);
