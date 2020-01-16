const appDate = document.getElementById("date");
const appServices = document.getElementById("services");
const today = moment().format("MMM Do YY");
let services;

appDate.innerHTML = `${today}`;

$.get(
  "https://cors-anywhere.herokuapp.com/https://status.cloud.google.com/",
  function(response) {
    let status = $(response).find(".status");
    services = status[0].innerText;
    appServices.innerHTML = `${services}`;
  }
);
