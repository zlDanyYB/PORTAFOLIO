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