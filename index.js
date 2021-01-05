async function getRandomNumber() {
  let myPromise = new Promise((resolve) => {
    setTimeout(() => resolve(Math.floor(Math.random() * 100)), 500);
  });

  let result = await myPromise;
  console.log(result);
}

async function printNum() {
  getRandomNumber();
}

printNum();
