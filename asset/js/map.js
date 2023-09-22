var map = L.map('map').setView([46.227638, 2.213749], 6.4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var imagejavascript = document.createElement("img");
imagejavascript.src = "./asset/image/smain.jpg";




var markerMiramas = L.marker([43.583328, 5]).addTo(map);
markerMiramas.bindPopup("<b>Miramas</b><br> Alan Zarli <br> Techs : React, PHP, Tailwind <br> Hobbies: Football, Musique").openPopup();
var markerAvignon = L.marker([43.9420677, 4.8072416]).addTo(map);
markerAvignon.bindPopup("<b>Avignon</b><br> Andréa Lopez <br> Techs : JS, PHP, CSS, HTML <br> Hobbies: Drama coréen, Jeux video ").openPopup();
var markerAigueperse = L.marker([46.0167, 3.2]).addTo(map);
markerAigueperse.bindPopup("<b>Aigueperse</b><br> Kimberley Moreau <br> Techs : Laravel, React, Tailwind <br> Hobbies: Lecture, Origami").openPopup();
var markerToulouse = L.marker([43.600000, 1.433333]).addTo(map);
markerToulouse.bindPopup("<b>Toulouse</b><br> Aurélien Georges et Hava Bakrieva <br><br>Techs Aurélien: Symphony, React, Bootstrap <br> Techs Hava: Vue.js, html, css, tailwind <br><br> Hobbies Aurélien: Marcher, écouter de la musique, musculation <br> Hobbies Hava: Lecture, DIY").openPopup();
var markerPontGibaud = L.marker([45.833328 , 2.86667]).addTo(map);
markerPontGibaud.bindPopup("<b>Pont-Gibaud</b><br> Nicolas Troc <br> Techs : Python, JS (React) <br> Hobbies: Randonné, Musique (faire et écouter) ").openPopup();
var markerMarseille = L.marker([43.300000, 5.400000]).addTo(map);
markerMarseille.bindPopup("<b>Marseille</b><br> Remi Bufnoir <br> Techs : Php,  JS, Symphony <br> Hobbies: Lecteur SF/Fantasy, Jeux video, Patisserie  ").openPopup();
var markerBordeaux = L.marker([44.833328, -0.56667]).addTo(map);
markerBordeaux.bindPopup("<b>Bordeaux</b><br> Medhi Rezgane <br> Techs : Php, symphony, html, sass, js, jquery, react <br> Hobbies: Foot, Madrid").openPopup();
var markerAix = L.marker([50.483333, 3.283333]).addTo(map);
markerAix.bindPopup("<b>Aix en provence</b><br> Sébastien Criado <br> Techs : Symphony, MySql, Bootstrap, Jquery, Angular <br> Hobbies: Foot, Madrid").openPopup();
var markerThiers = L.marker([45.857907, 3.545177]).addTo(map);
/* markerThiers.bindPopup(`<b>Thiers</b><br> Smain Kaya <br> Techs : Laravel, Js, Tailwind <br> Hobbies: Foot, Littérature(manga).`).openPopup(); */
var popupContent = '<h2>Smain Kaya</h2><img src="./asset/image/smain.jpg" alt="smain" width="200px" />';
markerThiers.bindPopup(popupContent).openPopup();


