"use strict";

function initMap() {
  const myLatLng = {
    lat: 41.6797,
    lng: -86.2534
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
    title: "320 N Lafayette Blvd South Bend, IN 46601"
  });
}

