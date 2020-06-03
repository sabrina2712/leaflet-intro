function onEachFeature(feature, layer) {
  if (feature.properties && feature.properties.popupContent) {
    layer.bindPopup(feature.properties.popupContent).openPopup();
  }
}
var mymap = L.map("mapid").setView([52.51627309503224, 13.377667665481567], 13);

L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=NM1RqxEFESW2KFOwm4Tc",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(mymap);

L.geoJSON(geojsonFeature, {
  onEachFeature: onEachFeature,
}).addTo(mymap);
