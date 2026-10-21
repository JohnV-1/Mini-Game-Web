
document.addEventListener('keydown', (evento) => {
    const main = document.getElementById("main");
    //console.log(`Tecla presionada: ${evento.key}`);
    //console.log(`Código físico: ${evento.code}`);
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    if (evento.key == "w") {
        ejecutar();
    }
    async function ejecutar() {
        main.style.top = "50px";
        await sleep(200);
        main.style.top = "200px";
    }
});
let boton = document.getElementById("boton");

boton.addEventListener('click', () => {
    const enemie = document.getElementById("enemie");
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    avan();
    async function avan() {
        enemie.style.top = "50px";
        await sleep(200);
        enemie.style.top = "200px";
    }
})