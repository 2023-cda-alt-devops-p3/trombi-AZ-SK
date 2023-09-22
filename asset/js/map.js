var map = L.map('map').setView([46.227638, 2.213749], 6.4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var markerMiramas = L.marker([43.583328, 5]).addTo(map);
var markerAvignon = L.marker([43.9420677, 4.8072416]).addTo(map);