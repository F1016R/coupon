document.getElementById("password-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const password = document.getElementById("password-input").value;
    
    if (password === "1234") {
        window.location.href = "produit.html"; // Assurez-vous que le nom ici correspond au bon nom de fichier
    } else {
        alert("Mot de passe incorrect. Veuillez réessayer.");
    }
});




