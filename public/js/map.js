// import { Map, MapStyle, config } from '@maptiler/sdk';
// import '@maptiler/sdk/dist/maptiler-sdk.css';

// const { coordinates } = require("@maptiler/client");

// const { geocoding } = require("@maptiler/client");

maptilersdk.config.apiKey = mapToken;

const map = new maptilersdk.Map({
    container: "map",
    style: maptilersdk.MapStyle.STREETS,
    center: listing.geometry.coordinates,
    zoom: 14
});

const marker = new maptilersdk.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(new maptilersdk.Popup({ offset: 25 }).setHTML(
        `<h4> ${listing.title} </h4> <p> Exact Location Will Be Provided After Booking!</p>`
))
  .addTo(map);