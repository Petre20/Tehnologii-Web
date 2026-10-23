let loginForm = document.getElementById("loginForm");

let emailInput = document.getElementById("email");

let passwordInput = document.getElementById("password");


loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    const emailRegex = /^[a-zA-Z]+\.[a-zA-Z]+\d{0,2}@e-uvt\.ro$/;
    
    if (!emailRegex.test(email)) {

        alert(
            "Email invalid!\n" +
            "Formatul trebuie să fie: prenume.nume@e-uvt.ro"
        );

        return;
    }

    window.location.href = "../HTML/home.html";

});