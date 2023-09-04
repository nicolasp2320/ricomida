document.addEventListener('DOMContentLoaded', function () {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));


});


document.addEventListener('DOMContentLoaded', function () {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

    const recetasTarjetas = document.querySelectorAll('.col-md-4.mb-2.mt-5 .card');
    recetasTarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', function () {
            this.classList.toggle('d-none');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const ingredientesTitulo = document.getElementById("Ingredientes");
    const preparacionTitulo = document.getElementById("Preparacion");

    if (ingredientesTitulo.textContent.trim().toLowerCase() === "ingredientes") {
        ingredientesTitulo.addEventListener("dblclick", function() {
            if (this.style.color === "red") {
                this.style.color = "";
            } else {
                this.style.color = "red";
            }
        });
    }

    if (preparacionTitulo && preparacionTitulo.textContent.trim().toLowerCase() === "preparacion") {
        preparacionTitulo.addEventListener("dblclick", function() {
            if (this.style.color === "red") {
                this.style.color = "";
            } else {
                this.style.color = "red";
            }
        });
    }
});


