var dataUrl = 'data/data.csv';
var maxZoom = 14;
var fieldSeparator = '|';
var baseUrl = 'http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg';
var apiKey = 'pk.eyJ1IjoiZGlnaXRhbGdsb2JlIiwiYSI6ImNpZXhsMng0NjA0MTU3MWtxYzlhaml0ZHAifQ.fyKO7PV8qdMpWdO_SM5xyQ';
var baseUrl = 'https://{s}.tiles.mapbox.com/v4/digitalglobe.n6nhclo2/{z}/{x}/{y}.png?access_token='+apiKey;
//var baseUrl = 'https://{s}.tiles.mapbox.com/v4/digitalglobe.mgdefc79/{z}/{x}/{y}.png?access_token='+apiKey
var baseAttribution = '&copy; <a href="http://developer.digitalglobe.com/maps-api/" target="_blank">DigitalGlobe</a> &copy <a href="">Mapbox</a> &copy <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>';
var subdomains = 'abcd';
var clusterOptions = {showCoverageOnHover: false, maxClusterRadius: 50};
var labelColumn = "Launch Name";
var opacity = 1.0;
