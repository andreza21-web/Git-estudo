const { Observable } = rxjs;
const { share} = rxjs.operators;

// PROMISSE VS OBSERVEBLE
const promise = new Promise((resolve) => {
    console.log('new Promisse');
    console.log('new Promisse');
    console.log('new Promisse');
    setTimeout(() => resolve(1));
});

const newPromisse = new Promise((resolve) => {
    console.log('promisse 2');
    const teste = 5 + 3;
    console.log('teste1 ',teste);
    setTimeout(() => resolve(1), 2000);
});

const mercado = new Promise((resolve) => {
    console.log('mercado', resolve(1));
});