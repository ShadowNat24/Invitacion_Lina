document.addEventListener("DOMContentLoaded", function () {
    const botonAbrir = document.getElementById("abrirInvitacion");
    const portada = document.getElementById("portada");
    const invitacion = document.getElementById("invitacion");

    if (botonAbrir && portada && invitacion) {
        botonAbrir.addEventListener("click", function () {
            portada.style.display = "none";
            invitacion.classList.add("mostrar");
            invitacion.setAttribute("aria-hidden", "false");
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
