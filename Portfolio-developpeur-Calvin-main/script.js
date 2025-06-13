function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");

    // Déplace le focus sur la modale
    modal.querySelector('.modal-content').focus();

    // Permet de fermer la modale avec la touche "Échap"
    document.addEventListener("keydown", handleEscapeKey);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");

    // Récupère l'élément déclencheur et redonne le focus
    const trigger = document.querySelector(`[onclick="openModal('${modalId}')"]`);
    if (trigger) trigger.focus();

    document.removeEventListener("keydown", handleEscapeKey);
}

// Ferme la modale au clique en dehors d'elle
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        closeModal(event.target.id);
    }
};

// Gère l'événement de la touche "Échap" pour fermer la modale
function handleEscapeKey(event) {
    if (event.key === "Escape") {
        const openModal = document.querySelector('.modal[style*="display: block"]');
        if (openModal) {
            closeModal(openModal.id);
        }
    }
}

// Gère l'événement de la touche "Entrée" pour ouvrir une modale
function handleKey(event, modalId) {
    if (event.key === "Enter") {
        openModal(modalId);
    }
}

// Gère l'événement de la touche "Entrée" pour fermer une modale via le bouton de fermeture
function handleCloseKey(event, modalId) {
    if (event.key === "Enter") {
        closeModal(modalId);
    }
}
