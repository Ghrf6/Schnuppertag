if (window.location.href.includes("maps.html")) {
    window.onload = function() {
        fillMaps()
    };
  }

  if (window.location.href.includes("stats.html")) {
    window.onload = function() {
        fillPlayer()
    };
  }

  
  if (window.location.href.includes("weapons.html")) {
    window.onload = function() {
      fillWeapons()
    };
  }
  
  

function fillPlayer() {
    fetch('data/player.json')
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < data.Spieler.length; i++) {
          let player = data.Spieler[i];
          let row = document.getElementsByTagName("tr")[i+1];
          row.cells[0].getElementsByTagName("input")[0].value = player.Name;
          row.cells[1].getElementsByTagName("input")[0].value = player.Rolle;
          row.cells[2].getElementsByTagName("input")[0].value = player['HS%'];
          row.cells[3].getElementsByTagName("input")[0].value = player['Win%'];
          row.cells[4].getElementsByTagName("input")[0].value = player['K/D'];
        }
      })
      .catch(error => {
        console.error('Fehler beim Laden der JSON-Datei:', error);
      });
  }

  function fillMaps() {
    fetch('data/maps.json')
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < data.Maps.length; i++) {
          let map = data.Maps[i];
          let row = document.getElementsByTagName("tr")[i+1];
          row.cells[0].getElementsByTagName("input")[0].value = map.Name;
          row.cells[1].getElementsByTagName("input")[0].value = map['Win%'];
          row.cells[2].getElementsByTagName("input")[0].value = map['AVG K/D'];
          row.cells[3].getElementsByTagName("input")[0].value = map.wins
          row.cells[4].getElementsByTagName("input")[0].value = map.losses;
        }
      })
      .catch(error => {
        console.error('Fehler beim Laden der JSON-Datei:', error);
      });
  }
  
  function fillWeapons() {
    console.log("data weapons");
    fetch('data/weapons.json')
      .then(response => response.json())
      .then(data => {
        const figures = document.getElementsByTagName("figure");
        for (let i = 0; i < data.Weapons.length && i < figures.length; i++) {
          let gun = data.Weapons[i];
          let figcaptionElements = figures[i].getElementsByTagName("figcaption");
          figcaptionElements[0].textContent = gun.Name;
          figcaptionElements[1].textContent = gun['HS%'];
          figcaptionElements[2].textContent = gun['K/D'];
        }
      })
      .catch(error => {
        console.error('Fehler beim Laden der JSON-Datei:', error);
      });
  }
  
