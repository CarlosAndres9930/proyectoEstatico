document.addEventListener("DOMContentLoaded", function(){
    const formulario = document.getElementById("formulario");
    const mensajeError = document.getElementById("mensajeError");

    formulario.addEventListener("submit", function(evento){
        evento.preventDefault()

        let doc = document.getElementById('doc').value.trim();
        let name = document.getElementById('name').value.trim();
        let phone = document.getElementById('phone').value.trim();
        let add = document.getElementById('add').value.trim();
        let note = document.getElementById('note').value.trim();

        if (doc === ''){
            mensajeError.innerHTML = "Document is mandatory";
            return;
        }
        if (name === ''){
            mensajeError.innerHTML = "Full name is mandatory";
            return;
        }
        if (phone === ''){
            mensajeError.innerHTML = "Phone number is needed";
            return;
        }
        if (add === ''){
            mensajeError.innerHTML = "Address is required";
            return;
        }
        if (note === ''){
            mensajeError.innerHTML = "Note is required";
            return;
        }

        mensajeError.innerHTML = '';
        formulario.submit();
        alert("Thanks for filling out the form");
    });
});