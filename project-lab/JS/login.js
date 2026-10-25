let loginForm = document.getElementById("loginForm");

let emailInput = document.getElementById("email");

let passwordInput = document.getElementById("password");


loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    const emailRegex = /^[a-zA-Z]+\.[a-zA-Z]+(?:\d{2})?@e-uvt\.ro$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;
    
    if (!emailRegex.test(email)) {

        alert(
            "Email invalid!\n" +
            "Formatul trebuie să fie: prenume.nume@e-uvt.ro sau prenume.nume12@e-uvt.ro"
        );

        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Parola trebuie să aibă minimum 7 caractere, o literă mică, o literă mare, o cifră și un caracter special.");
        return;
    }

    alert("Login reușit!");
    window.location.href = "../HTML/home.html";

});
