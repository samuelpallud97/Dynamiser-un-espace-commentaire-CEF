// Récupération du formulaire + ajout de la fonction
let form = document.getElementById("data");
form.addEventListener("submit", function(e) {

    // Récupération des champs de données
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let errorMessage = document.getElementById("error-message");
    let comment = document.getElementById("message");
    
    // Vérification des champs : message d'erreur
    if (firstName.value === "" || lastName.value === "" || comment.value === "") {
    errorMessage.style.display = "block";
    e.preventDefault();
    
    // Vérification des champs : afficher les données remplies
    } else { 
    errorMessage.style.display = "none";
    e.preventDefault();
    
    let commentList = document.getElementById("comment-list");
    const divcopy = document.createElement("divcopy");
    
    // Ajout du contenu du formulaire dans un nouveau commentaire
    divcopy.innerHTML =
    '<hr>' +
    '<div class="flex space-x-4 text-sm text-gray-500">' +
    '<div class="flex-1 py-10 border-t border-gray-200">' +
    '<h3 class="font-medium text-gray-900">' + firstName.value + lastName.value + '<h3>' +
    '<div class="prose prose-sm mt-4 max-w-none text-gray-500">' +
    '<p>' + comment.value + '</p>' +
    '</div>' +
    '</div>' +
    '</div>';
    
    commentList.appendChild(divcopy);
    
    // Suppression du contenu des champs du formulaire après envoi
    form.reset();
    }
    });
    