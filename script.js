let modalWin = document.querySelector ('.container-title-button');
let winUp = document.querySelector('.modal');
let closeButton = document.querySelector ('.w-100');
let closeWin = document.querySelector ('.btn-close');
let winUpTwo = document.querySelector ('.button-tap');

modalWin.addEventListener ('click', () => {
    console.log('clicked!!!!');
    winUp.style.display = 'block';
});

winUpTwo.addEventListener ('click', () => {
    console.log('clicked!!!!');
    winUp.style.display = 'block';
});

closeWin.addEventListener ('click', () => {
    console.log('close!!!!');
        winUp.style.display = 'none';
    });

 closeButton.addEventListener ('click', () => {
     console.log('close!!!!');
        winUp.style.display = 'none';
    });