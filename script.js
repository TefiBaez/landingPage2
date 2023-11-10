function expandImage() {
    // Mostrar el fondo y la imagen ampliada
    var overlay = document.getElementById('overlay');
    var expandedImg = document.getElementById('expanded-img');
    overlay.style.display = "block";
    expandedImg.style.display = "block";

    // Definir la imagen ampliada
    expandedImg.src = document.getElementById('profile-img').src;
}

// Cerrar la imagen ampliada al hacer clic en el fondo
document.getElementById('overlay').onclick = function () {
    document.getElementById('overlay').style.display = "none";
    document.getElementById('expanded-img').style.display = "none";
};


function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "block") {
        section.style.display = "none";
    } else {
        section.style.display = "block";
    }
}

function openLink(url) {
    window.open(url, '_blank');
}
