// Replace these dimensions with the actual width and height of your TIFF image
var imageWidth = 800;
var imageHeight = 800;

// Calculate degrees per pixel
var degreesPerPixelLat = 180 / imageHeight;
var degreesPerPixelLon = 180 / imageWidth;

// Center point
var centerLat = 0;
var centerLon = 0;

// Calculate the southwest and northeast coordinates
var southwestLat = centerLat - (imageHeight / 2) * degreesPerPixelLat;
var southwestLon = centerLon - (imageWidth / 2) * degreesPerPixelLon;
var northeastLat = centerLat + (imageHeight / 2) * degreesPerPixelLat;
var northeastLon = centerLon + (imageWidth / 2) * degreesPerPixelLon;

// Create a Leaflet map
var map = L.map('map');

// Add the georeferenced TIFF image using the 'leaflet-tiff' plugin or other methods

// Set the initial view and bounds based on the calculated coordinates
map.fitBounds([[southwestLat, southwestLon], [northeastLat, northeastLon]]);
