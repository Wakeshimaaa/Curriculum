function Mostrar(value) {
    document.getElementById('display').value += value;
}

function Limpiar() {
    document.getElementById('display').value = '';
}

function Borrar() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calcular() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}