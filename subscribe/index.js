const { Observable } = rxjs;
const { share } = rxjs.operators;

// PROMISSE VS OBSERVEBLE
const promise = new Promise((resolve) => {
    console.log('new Promisse');
    console.log('new Promisse');
    console.log('new Promisse');
    setTimeout(() => resolve(1));
});

const newPromisse = new Promise((resolve) => {
    console.log('promisse 2');
    const newTeste = 6 + 5;
    console.log('new teste', newTeste);
    setTimeout(() => resolve(1), 2000);
});

