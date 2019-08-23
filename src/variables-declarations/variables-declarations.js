function initGame(init) {
    var name = 'Rafaras';
    var city = 'Em Londres amanhã!';
    if (init) {
        city = ' São Paulo HJ!';
    }
    console.log(name + " est\u00E1 em " + city);
}
initGame(false);
