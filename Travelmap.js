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
var circlemarker = L.circle(coordinates, {
color: "blue",
fillColor: "white"
fillOpacity: 0.25,
radius: 50
}).bindPopup(`<iframe width="280" height="160" src="https://www.youtube.com/embed/zQzLJurMaDk?si=Buf1YGGzQOXhoWc0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`).addTo(map);
