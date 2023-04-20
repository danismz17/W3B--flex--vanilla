let ingresarWeb = document.getElementById("ingresar-web");
let webContainer = document.getElementById("web-container")
let modal = document.getElementById("modal")
let exitCruz = document.getElementById("exit")

function abrirModal() {
    modal.classList.remove ("hidden");
    modal.classList.add ("scale-up-tr");
    webContainer.classList.add ("hidden");
    document.title = "Ingresar"
}

function cerrarModal() {
    modal.classList.add ("hidden");
    modal.classList.remove ("scale-up-tr");
    webContainer.classList.remove ("hidden");
    document.title = "Flex"
}

