const { Observable } = rxjs;
const { share} = rxjs.operators;

// PROMISSE VS OBSERVEBLE
const promise = new Promise((resolve) => {
    console.log('Iniciando Promisse 1');
    setTimeout(() => resolve(1), 3000);
});