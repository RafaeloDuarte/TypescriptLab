function initGame (init:boolean){
    const name = 'Rafaras';
    let city = 'Em Londres amanhã!';

    if(init){
        city = ' São Paulo HJ!';
    }

    console.log(`${name} está em ${city}`);

}

initGame(false);