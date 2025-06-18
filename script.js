let menuVisible = false;
//funcion que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
function seleccionar() {
    //oculta el menu una vez que se ha seleccionado una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//funcion que cambia las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");     
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
      let habilidades = document.getElementsByClassName("progreso");
      habilidades[0].classList.add("javascript");
      habilidades[1].classList.add("htmlcss"); 
      habilidades[2].classList.add("angular"); 
      habilidades[3].classList.add("native"); 
      habilidades[4].classList.add("java"); 
      habilidades[5].classList.add("figma");
      habilidades[6].classList.add("comunicacion"); 
      habilidades[7].classList.add("trabajo"); 
      habilidades[8].classList.add("creatividad"); 
      habilidades[9].classList.add("dedicacion"); 
      habilidades[10].classList.add("gestion"); 
      habilidades[11].classList.add("resolucion");  
        
    }
}

//dectecta el scrolling par aplicar las animaciones de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
}

// Acción para descargar el archivo PDF
document.getElementById("descargarBtn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "hoja_de_vida_dany.pdf"; // Ruta al archivo PDF
    link.download = "HV DANY-VEGA.pdf"; // Nombre del archivo al descargar
    link.click();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Acción para abrir WhatsApp con mensaje
document.getElementById("whatsappBtn").addEventListener("click", function() {
    const numero = "593987575594";
    const mensaje = encodeURIComponent("👋 ¡Hola! Muchas gracias por revisar mi portafolio 🙌 Aprecio tu tiempo 💻📱.Puedes escribirme directamente por aquí.");
    const url = `https://wa.me/${numero}?text=${mensaje}`;
    window.location.href = url;
});