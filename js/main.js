function encontrarMaiorPalavra() {
    const palavraA = document.getElementById('palavraA').value;
    const palavraB = document.getElementById('palavraB').value;

    if (palavraA.length > palavraB.length) {
        document.getElementById('resultado').innerText = 'A';
    } else if (palavraB.length > palavraA.length) {
        document.getElementById('resultado').innerText = 'B';
    } else {
        document.getElementById('resultado').innerText = '*';
    }
}
