(function(){

    document.addEventListener('DOMContentLoaded',function(){
     
    // Mapa
    var map = L.map('mapa').setView([19.259963, -99.469657], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([19.259963, -99.469657]).addTo(map)
      .bindPopup('GDLWebCamp <br/> Boletos ya disponibles')
      .openPopup();
    });

})();