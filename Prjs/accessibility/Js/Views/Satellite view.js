function satelliteview(boundary, lat, long, zoom) {
  globalThis.map = L.map('map', {minZoom: zoom-1, zoomControl: false}).setView([lat, long], zoom);
  globalThis.satellite = L.TileLayer.boundaryCanvas('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1IjoiYWxpMTIwMSIsImEiOiJjazF0cTdoYW8waHM3M2JxeXZwZjM3dDg5In0.x3IEWUyeHcXz6k3VruQfuQ',
    boundary: boundary
  });
  L.control.zoom({position: 'bottomright'}).addTo(map);
  satellite.addTo(map);
}


