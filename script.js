
require(["esri/config","esri/Map", "esri/views/MapView"], function (esriConfig,Map, MapView) {

  esriConfig.apiKey = "AAPK41e85776aa694932b8c8d6c432b00d31tMnwYB8Jr0GjIqxMiKSFTd48uA2Qqc3oxPFdogyE-Dv25enoSEgW1QYX6YqCGWuU";
  const map = new Map({
      basemap: "hybrid" // Basemap layer service
  });

  const view = new MapView({
      map: map,
      center: [0.34, 44.50],// Longitude, latitude
      zoom: 13, // Zoom level
      container: "viewDiv" // Div element
  });

});


require([ "esri/config","esri/Map","esri/views/MapView","esri/widgets/Search"],
   function(esriConfig,Map, MapView, Search) {esriConfig.apiKey = "AAPK41e85776aa694932b8c8d6c432b00d31tMnwYB8Jr0GjIqxMiKSFTd48uA2Qqc3oxPFdogyE-Dv25enoSEgW1QYX6YqCGWuU";
      const map = new Map({
           basemap: "hybrid" });

const view = new MapView({
 container: "viewDiv",
 map: map,
center: [2.38, 48.85],
 zoom: 12
   });
const search = new Search({  //Add Search widget
view: view
});

view.ui.add(search, "top-right"); //Add to the map

});




