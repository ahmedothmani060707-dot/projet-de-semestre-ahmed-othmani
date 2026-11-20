let boutons = document.querySelectorAll(".btn-panier");

boutons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        alert("Produit ajouté avec succès !");
    });
});