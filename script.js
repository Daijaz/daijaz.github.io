
const spainButton = document.getElementById('spain-button');
const usaButton = document.getElementById('usa-button')
const sunButton = document.getElementById('sun-button');
const moonButton = document.getElementById('moon-button');
const burgerButton = document.getElementById('burger');
const closeButton = document.getElementById('close-aside');



function showAside(event) {
    const headerNavList = document.getElementsByClassName('header-container');
    headerNavList[0].style.display = 'none';
    const asideNav = document.getElementsByClassName('aside-navbar');
    asideNav[0].style.display = 'flex';
}

function hideAside(event) {
    const headerNavList = document.getElementsByClassName('header-container');
    headerNavList[0].style.display = 'flex';
    const asideNav = document.getElementsByClassName('aside-navbar');
    asideNav[0].style.display = 'none';
}


function spanishText(event) {
    spainButton.style.display = 'none';
    usaButton.removeAttribute("hidden");
    document.getElementById('about').innerHTML = 'Acerca de mí';
    document.getElementById('projects').innerHTML = 'Proyectos';
    document.getElementById('contact').innerHTML = 'Contacto';
    document.getElementById('aboutAside').innerHTML = 'Acerca de mí';
    document.getElementById('projectsAside').innerHTML = 'Proyectos';
    document.getElementById('contactAside').innerHTML = 'Contacto';
    document.getElementById('profesion').innerHTML = 'Ingeniero de software';
    document.getElementById('introduction').innerHTML = 'Elaboro código elegante que fusiona a la perfección lógica y creatividad.';
    document.getElementById('title-about-me').innerHTML = 'Acerca de mí';
    document.getElementById('about-me-paragraph').innerHTML = 'Soy Miguel, un Ingeniero de Sistemas de Colombia. Mi entusiasmo por el desarrollo web me impulsa a aprender y crecer. Estoy ansioso por explorar nuevas tecnologías y contribuir con mi pasión y habilidades para ofrecer soluciones innovadoras.';
    document.getElementById('skills-title').innerHTML = 'Habilidades';
    document.getElementById('projects-title').innerHTML = 'Proyectos';
    document.getElementById('first-project').innerHTML = 'Este es el juego de adivinar números en el que usted elige un número y el ordenador también selecciona uno. El ganador se determina por el número más cercano al objetivo.';
    document.getElementById('second-project').innerHTML = 'Listfy es una aplicación web que permite a los usuarios crear listas de reproducción personalizadas utilizando canciones de Spotify. A través de la integración con la API de Spotify, puedes buscar canciones, agregar tus favoritas a una playlist, y guardarla directamente en tu cuenta de Spotify.';
    document.getElementById('contact-title').innerHTML = 'Contacto';
}

function englishText(event) {
    spainButton.style.display = 'initial';
    usaButton.setAttribute("hidden",true);
    document.getElementById('about').innerHTML = 'About me';
    document.getElementById('projects').innerHTML = 'Projects';
    document.getElementById('contact').innerHTML = 'Contact';
    document.getElementById('aboutAside').innerHTML = 'About me';
    document.getElementById('projectsAside').innerHTML = 'Projects';
    document.getElementById('contactAside').innerHTML = 'Contact';
    document.getElementById('profesion').innerHTML = 'Software engineer';
    document.getElementById('introduction').innerHTML = 'Crafting elegant code that seamlessly merges logic and creativity.'
    document.getElementById('title-about-me').innerHTML = 'About me';
    document.getElementById('about-me-paragraph').innerHTML = "I'm Miguel, a System Engineer from Colombia. My enthusiasm for web development drives me to learn and grow. I'm eager to explore new technologies and contribute with my passion and habilities to deliver innovative solutions.";
    document.getElementById('skills-title').innerHTML = 'Skills';
    document.getElementById('projects-title').innerHTML = 'Projects';
    document.getElementById('first-project').innerHTML = 'This is the number guessing game where you choose a number and the computer selects one as well. The winner is determined by the number closest to the target.';
    document.getElementById('second-project').innerHTML = 'Listfy is a web application that allows users to create custom playlists using songs from Spotify. Through integration with the Spotify API, you can search for songs, add your favorites to a playlist, and save it directly to your Spotify account.';
    document.getElementById('contact-title').innerHTML = 'Contact';
}

function lightTheme(event) {
    sunButton.style.display = 'none';
    moonButton.removeAttribute("hidden");
    document.body.style.background = "#eae9e9";
    document.getElementById('name').style.color = "#141E30";
    document.getElementById('introduction').style.color = "#141E30";
    document.getElementById('about-me-paragraph').style.color = "#141E30";
    document.getElementById('first-project').style.color = "#141E30";
    document.getElementById('second-project').style.color = "#141E30";
}

function darkTheme(event) {
    sunButton.style.display = 'initial';
    moonButton.setAttribute("hidden",true);
    document.getElementById('name').style.color = "#D9D3C1";
    document.body.style.background = "-webkit-linear-gradient(-1deg, #0D0D0D, #141E30)";
    document.getElementById('introduction').style.color = "#D9D3C1";
    document.getElementById('about-me-paragraph').style.color = "#D9D3C1";
    document.getElementById('first-project').style.color = "#D9D3C1";
    document.getElementById('second-project').style.color = "#D9D3C1";
}


spainButton.addEventListener('click', spanishText);
usaButton.addEventListener('click', englishText);
sunButton.addEventListener('click', lightTheme);
moonButton.addEventListener('click', darkTheme);
burgerButton.addEventListener('click', showAside)
document.getElementById('aboutAside').addEventListener('click', hideAside);
document.getElementById('projectsAside').addEventListener('click', hideAside);
document.getElementById('contactAside').addEventListener('click', hideAside);
closeButton.addEventListener('click', hideAside);

