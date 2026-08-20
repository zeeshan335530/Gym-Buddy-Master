import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="map"
export default class extends Controller {
  static values = {
    apiKey: String,
    markers: Array
  }
  connect() {
  console.log("✅ Map controller connected");

  mapboxgl.accessToken = this.apiKeyValue;

  this.map = new mapboxgl.Map({
  container: this.element,
  style: `https://api.maptiler.com/maps/streets/style.json?key=${this.apiKeyValue}`,
  center: [77.2090, 28.6139],
  zoom: 11
});

this.map.on("load", () => {
  console.log("✅ MAP LOADED");

  this.map.resize();

  this.#addMarkersToMap();
  this.#fitMapToMarkers();
});



  // Show current user's location
  console.log("Checking geolocation...");

if (navigator.geolocation) {
  console.log("Geolocation supported");

  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("SUCCESS", position);
  const userLocation = [
  position.coords.longitude,
  position.coords.latitude
];
      console.log(document.body.innerHTML);

const latField = document.getElementById("live_latitude");
const lngField = document.getElementById("live_longitude");

console.log(latField);
console.log(lngField);

if (latField && lngField) {
  latField.value = position.coords.latitude;
  lngField.value = position.coords.longitude;

  console.log("Latitude:", latField.value);
  console.log("Longitude:", lngField.value);

  const searchBtn = document.getElementById("searchBtn");
  if (searchBtn) {
    searchBtn.disabled = false;
  }
}

      new mapboxgl.Marker({ color: "red" })
        .setLngLat(userLocation)
        .addTo(this.map);

      this.map.flyTo({
        center: userLocation,
        zoom: 14
      });
    },
    (error) => {
      console.log("ERROR", error);
    }
  );
} else {
  console.log("Browser doesn't support geolocation");
  }
}    
  #addMarkersToMap() {

    this.markersValue.forEach((marker) => {
      const popup = new mapboxgl.Popup().setHTML(marker.info_window)

      const element = document.createElement('div');
      element.className = 'marker';
      element.style.backgroundImage = `url('${marker.image_url}')`;
      element.style.backgroundSize = 'contain';
      element.style.width = '25px';
      element.style.height = '27px';

      new mapboxgl.Marker(element)
        .setLngLat([ marker.lng, marker.lat ])
        .setPopup(popup)
        .addTo(this.map)
    })
  }

  #fitMapToMarkers() {
    const bounds = new mapboxgl.LngLatBounds()
    this.markersValue.forEach(marker => bounds.extend([ marker.lng, marker.lat ]))
    this.map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 })
  }


}
