// Exercice 10: Exécuter des promesses en série
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function wait2Seconde() {
  try {
    await sleep(1000);
    await sleep(1000);
    console.log("1");
  } catch (err) {
    console.error(err);
  }
}

wait2Seconde();
