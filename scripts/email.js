emailjs.init({
    publicKey: "nEKD4LnJ2_DByL9I7"
})

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    emailjs.sendForm(
        "service_portfolio",
        "template_av4wah6",
        this
    )
    .then(() => {
        Toastify({
            text: "Mensagem enviada com sucesso",
            duration: 5000,
            close: true,
            gravity: "bottom",
            position: "left", 
            stopOnFocus: true, 
            style: {
                background: "#15c301",
            },
        }).showToast();

        form.reset();
    })
    .catch((error) => {
        console.log(error);

        Toastify({
            text: "Erro ao enviar mensagem",
            duration: 5000,
            close: true,
            gravity: "bottom",
            position: "left", 
            stopOnFocus: true, 
            style: {
                background: "#ef4444",
            },
        }).showToast();
    })
})
