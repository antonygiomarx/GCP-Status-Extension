export default class Gcp {
  constructor() {
    const appDate = document.getElementById("date");
    const appServices = document.getElementById("services");
    const today = moment().format("MMM Do YY");
    appDate.innerHTML = `${today}`;

    $.get(
      "https://cors-anywhere.herokuapp.com/https://status.cloud.google.com/",
      function(response) {
        let status = $(response).find(".status");
        let services = status[0].innerText;
        appServices.innerHTML = `${services}`;
      }
    );
  }
}
