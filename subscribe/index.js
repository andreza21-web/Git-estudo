const { Observable } = rxjs;
const { share} = rxjs.operators;

// PROMISSE VS OBSERVEBLE
const promise = new Promise((resolve) => {
    console.log('Iniciando nova Promisse');
    setTimeout(() => resolve(1));
});

const newPromisse = new Promise((resolve) => {
    console.log('Iniciando  Promisse 2');
    setTimeout(() => resolve(1), 3000);
});