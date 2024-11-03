function openModal(modalId, imageSrc, title, description, linkUrl) {
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
    modal.querySelector("img").src = imageSrc;
    modal.querySelector("h4").textContent = title;
    modal.querySelector("p").textContent = description;
    modal.querySelector("a").href = linkUrl;
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
