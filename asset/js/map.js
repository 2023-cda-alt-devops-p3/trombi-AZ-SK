var map = L.map('map').setView([46.227638, 2.213749], 6.4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var markerMiramas = L.marker([43.583328, 5]).addTo(map);
var popupContentAlan = '<h2>Alan</h2><b>Miramas</b><p> Techs : React, PHP, Tailwind <br> Hobbies: Football, Musique</p><img src="./asset/image/alan.jpg" alt="smain" width="200px"/><br><a href="https://www.linkedin.com/in/alan-zarli-3a126423b/">Linkedin</a><br><a href="https://github.com/alanzarli">Github</a>';
markerMiramas.bindPopup(popupContentAlan).openPopup();

var markerAvignon = L.marker([43.9420677, 4.8072416]).addTo(map);
var popupContentAndrea = '<h2>Andréa Lopez</h2><b>Avignon</b><p> Techs : JS, PHP, CSS, HTML <br> Hobbies: Drama coréen, Jeux video</p><img src="./asset/image/andrea.jpg" alt="smain" width="200px"/><a href="https://www.linkedin.com/in/andrealpz/">Linkedin</a><br><a href="#">Github</a>';
markerAvignon.bindPopup(popupContentAndrea).openPopup();

var markerAigueperse = L.marker([46.0167, 3.2]).addTo(map);
var popupContentKimberly = '<h2>Kimberley Moreau</h2><b>Aigueperse</b><p> Techs : Laravel, React, Tailwind <br> Hobbies: Lecture, Origami</p><img src="./asset/image/kimberly.jpg" alt="smain" width="200px"/><a href="https://fr.linkedin.com/in/magali-k-moreau">Linkedin</a><br><a href="https://github.com/mikaocko">Github</a>';
markerAigueperse.bindPopup(popupContentKimberly).openPopup();

var markerToulouse = L.marker([43.600000, 1.433333]).addTo(map);
var popupContentAurelienHava = '<h2>Aurélien Georges et Hava Bakrieva</h2><b>Toulouse</b><p> Techs Aurélien: Symphony, React, Bootstrap <br> Techs Hava: Vue.js, html, css, tailwind <br><br> Hobbies Aurélien: Marcher, écouter de la musique, musculation <br> Hobbies Hava: Lecture, DIY</p><img src="./asset/image/aurelien.jpg" alt="smain" width="200px" /><img src="./asset/image/hava.jpg" alt="smain" width="200px"/><a href="https://www.linkedin.com/in/aurélien-georges-910466144/">Linkedin Aurélien</a><br><a href="https://github.com/AurelienGEORGES">Github Aurelien</a><a href="https://www.linkedin.com/in/hava-bakrieva/">Linkedin Hava</a><br><a href="https://github.com/Havakii">Github Hava</a>';
markerToulouse.bindPopup(popupContentAurelienHava).openPopup();

var markerPontGibaud = L.marker([45.833328 , 2.86667]).addTo(map);
var popupContentNicolas = '<h2>Nicolas Troc</h2><b>Pont-Gibaud</b><p> Techs : Python, JS (React) <br> Hobbies: Randonné, Musique (faire et écouter) </p><img src="./asset/image/nicolas.jpg" alt="smain" width="200px" /><a href="https://www.linkedin.com/in/ntroc763/">Linkedin</a><br><a href="https://github.com/ColasCitron">Github</a>';
markerPontGibaud.bindPopup(popupContentNicolas).openPopup();

var markerMarseille = L.marker([43.300000, 5.400000]).addTo(map);
var popupContentRemiMichael = '<h2>Remi Bufnoir et Michael</h2><b>Bordeaux</b><p> Techs Remi : Php,  JS, Symphony <br> Techs Micheal:  Php, Sails, Js <br><br>Hobbies Remi: Lecteur SF/Fantasy, Jeux video, Patisserie<br>Hobbies Micheal: Tech, crypto</p><img src="./asset/image/remi.jpg" alt="smain" width="200px" /><img src="./asset/image/micheal.jpg" alt="smain" width="200px" /><a href="https://www.linkedin.com/in/rémi-bufnoir-82029a265/">Linkedin Rémi</a><br><a href="https://github.com/rbufnoir/">Github Rémi</a><a href="#">Linkedin Michael</a><br><a href="#">Github Michael</a>';
markerMarseille.bindPopup(popupContentRemiMichael).openPopup();

var markerBordeaux = L.marker([44.833328, -0.56667]).addTo(map);
var popupContentMedhi = '<h2>Medhi Rezgane</h2><b>Bordeaux</b><p> Techs : Php, symphony, html, sass, js, jquery, react <br> Hobbies: Foot, Madrid</p><img src="./asset/image/sebastien.jpg" alt="smain" width="200px" /><a href="https://www.linkedin.com/in/mehdi-rezgane/">Linkedin</a><br><a href="https://github.com/FlexCodeur">Github</a>';
markerBordeaux.bindPopup(popupContentMedhi).openPopup();

var markerAix = L.marker([50.483333, 3.283333]).addTo(map);
var popupContentSebastien = '<h2>Sébastien Criado</h2><b>Aix en provence</b><p> Techs : Symphony, MySql, Bootstrap, Jquery, Angular <br> Hobbies: Foot, jeux vidéo, voyage</p><img src="./asset/image/sebastien.jpg" alt="smain" width="200px"/><br><a href="https://www.linkedin.com/in/s%C3%A9bastien-criado-19427a212/">Linkedin</a><br><a href="https://github.com/sebcriado">Github</a>';
markerAix.bindPopup(popupContentSebastien).openPopup();

var markerClermont = L.marker([45.777222, 3.087025]).addTo(map);
var popupContentArnaud = '<h2>Arnaud Fenérol</h2><b>Clermont Ferrant</b><p> Techs : Js, React <br> Hobbies: Jeux video cinéma</p><img src="./asset/image/arnaud.jpg" alt="smain" width="200px" /><a href="https://www.linkedin.com/in/afenerol">Linkedin</a><br><a href="https://github.com/arnaudfl">Github</a>';
markerClermont.bindPopup(popupContentArnaud).openPopup();

var markerTours = L.marker([47.383333, 0.683333]).addTo(map);
var popupContentAli = '<h2>Ali Moussaev</h2><p> Techs : Delphi <br> Hobbies: Voyages</p><img src="./asset/image/ali.jpg" alt="smain" width="200px" /><a href="#">Linkedin</a><br><a href="#">Github</a>';
markerTours.bindPopup(popupContentAli).openPopup();

var markerSaintOmer = L.marker([50.750115, 2.252208]).addTo(map);
markerSaintOmer.bindPopup("<b>Saint-Omer</b><br> JB <br> Techs : XXXXXXXXX <br> Hobbies: XXXXXXX").openPopup();

var markerSamer = L.marker([50.633333, 1.750000]).addTo(map);
markerSamer.bindPopup("<b>Samer</b><br> Nicolas <br> Techs : XXXXXXXXX <br> Hobbies: XXXXXXX").openPopup();


var markerThiers = L.marker([45.857907, 3.545177]).addTo(map);
var popupContentSmain = '<h2>Smain Kaya</h2><p> Techs : Laravel, Js, Tailwind <br> Hobbies: Foot, Littérature(manga)</p><img src="./asset/image/smain.jpg" alt="smain" width="200px" /><a href="#">Linkedin</a><br><a href="https://github.com/KAYA-SMAIN">Github</a>';
markerThiers.bindPopup(popupContentSmain).openPopup();

var markerGrenoble = L.marker([45.166672, 5.71667]).addTo(map);
var popupContentLucas = '<h2>Lucas Bosak</h2><p> Techs : React <br> Hobbies: Orga d’event</p><img src="./asset/image/lucas.jpg" alt="smain" width="200px" /><a href="https://www.linkedin.com/in/lucas-bosak/">Linkedin</a><br><a href="https://github.com/Kalsak15">Github</a>';
markerGrenoble.bindPopup(popupContentLucas).openPopup();


