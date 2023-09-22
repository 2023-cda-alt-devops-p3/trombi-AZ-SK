var map = L.map('map').setView([46.227638, 2.213749], 6.4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


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
markerMarseille.bindPopup("<b>Marseille</b><br> Remi Bufnoir et Michael <br> Techs Remi : Php,  JS, Symphony <br> Techs Micheal:  Php, Sails, Js <br><br>Hobbies Remi: Lecteur SF/Fantasy, Jeux video, Patisserie<br>Hobbies Micheal: Tech, crypto").openPopup();

var markerBordeaux = L.marker([44.833328, -0.56667]).addTo(map);
markerBordeaux.bindPopup("<b>Bordeaux</b><br> Medhi Rezgane <br> Techs : Php, symphony, html, sass, js, jquery, react <br> Hobbies: Foot, Madrid").openPopup();

var markerAix = L.marker([50.483333, 3.283333]).addTo(map);
markerAix.bindPopup("<b>Aix en provence</b><br> Sébastien Criado <br> Techs : Symphony, MySql, Bootstrap, Jquery, Angular <br> Hobbies: Foot, Madrid").openPopup();

var markerClermont = L.marker([45.777222, 3.087025]).addTo(map);
markerClermont.bindPopup("<b>Clermont Ferrant </b><br> Arnault Fenérol <br> Techs : Js, React <br> Hobbies: Jeux video cinéma").openPopup();

var markerTours = L.marker([47.383333, 0.683333]).addTo(map);
markerTours.bindPopup("<b>Tours</b><br> Ali Moussaev <br> Techs : Delphi <br> Hobbies: Voyages").openPopup();

var markerSaintOmer = L.marker([50.750115, 2.252208]).addTo(map);
markerSaintOmer.bindPopup("<b>Saint-Omer</b><br> JB <br> Techs : XXXXXXXXX <br> Hobbies: XXXXXXX").openPopup();

var markerSamer = L.marker([50.633333, 1.750000]).addTo(map);
markerSamer.bindPopup("<b>Samer</b><br> Nicolas <br> Techs : XXXXXXXXX <br> Hobbies: XXXXXXX").openPopup();


var markerThiers = L.marker([45.857907, 3.545177]).addTo(map);
var popupContentSmain = '<h2>Smain Kaya</h2><p> Techs : Laravel, Js, Tailwind <br> Hobbies: Foot, Littérature(manga)</p><img src="./asset/image/smain.jpg" alt="smain" width="200px" />';
markerThiers.bindPopup(popupContentSmain).openPopup();

var markerGrenoble = L.marker([45.166672, 5.71667]).addTo(map);
var popupContentLucas = '<h2>Lucas Bosak</h2><p> Techs : React <br> Hobbies: Orga d’event</p><img src="./asset/image/smain.jpg" alt="smain" width="200px" />';
markerGrenoble.bindPopup(popupContentLucas).openPopup();


