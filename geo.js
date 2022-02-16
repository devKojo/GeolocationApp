
if ('geolocation' in navigator) {
  console.log("Geolocation available")
  let internetchecker = navigator.onLine ? `Connected` : `You are currently offline`;
  console.warn(internetchecker);
    
    const watchID = navigator.geolocation.watchPosition((position) => {
        console.log(position);
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let time = position.timestamp;

      document.getElementById(`lat-data`).innerHTML = lat;
      document.getElementById(`long-data`).innerHTML = long;
      let date = new Date(time);
      let hrs = date.getHours();
      let min = date.getMinutes();
      let sec = date.getSeconds();
   
      document.getElementById(`time`).innerHTML =`${hrs}:${min}:${sec}`;


      let map = L.map('map').setView([lat, long], 12);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, long]).addTo(map)
    .bindPopup('WS-447-3528')
    .openPopup();
      
    });
}
else {
  console.log("Geolocation not available")
}