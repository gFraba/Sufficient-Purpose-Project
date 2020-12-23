"use strict";

function initMap() {
  const myLatLng = {
    lat: 41.6957,
    lng: -86.3133
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: myLatLng,
    fullscreenControl: true,
    zoomControl: true,
    streetViewControl: false
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "22500 U.S. 20 Business, South Bend, IN 46628, USA"
  });
}