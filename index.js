async function getRandomNumber() {
  let myPromise = new Promise((resolve) => {
    setTimeout(() => resolve(Math.floor(Math.random() * 100)), 500);
  });

  return myPromise;
}

async function printNum() {
  let result = await getRandomNumber();
  console.log(result);
}

printNum();
