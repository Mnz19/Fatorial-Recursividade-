function fatorial(n){
    if (n == 0) {
        return 1;
    }
    else {
        return n * fatorial(n - 1);
    } 
}

function calcularFat() {
    const n = parseInt(document.getElementById("n").value);
    const resultado = fatorial(n);
    document.getElementById("resultado").innerHTML = "O fatorial de " + n + " é " +resultado;
}
