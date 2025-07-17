//18.0708° N, 63.0501° W
let coordinates = [18.0708, -63.0501];
var map= L.map("map",{
center: coordinates,
  zoom: 10
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
