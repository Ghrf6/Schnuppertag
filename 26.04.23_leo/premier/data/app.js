function fillPlayer() {
  fetch("player.json")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.Spieler.length; i++) {
        let player = data.Spieler[i];
        let row = document.getElementsByTagName("tr")[i + 1];
        row.cells[0].getElementsByTagName("input")[0].value = player.Name;
        row.cells[1].getElementsByTagName("input")[0].value = player.Rolle;
        row.cells[2].getElementsByTagName("input")[0].value = player["HS%"];
        row.cells[3].getElementsByTagName("input")[0].value = player["Win%"];
        row.cells[4].getElementsByTagName("input")[0].value = player["K/D"];
      }
    })
    .catch((error) => {
      console.error("Fehler beim Laden der JSON-Datei:", error);
    });
}

function fillMaps() {
  fetch("maps.json")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.Maps.length; i++) {
        let map = data.Maps[i];
        let row = document.getElementsByTagName("tr")[i + 1];
        row.cells[0].getElementsByTagName("input")[0].value = map.Name;
        row.cells[1].getElementsByTagName("input")[0].value = map["Win%"];
        row.cells[2].getElementsByTagName("input")[0].value = map["AVG K/D"];
        row.cells[3].getElementsByTagName("input")[0].value = map.wins;
        row.cells[4].getElementsByTagName("input")[0].value = map.losses;
      }
    })
    .catch((error) => {
      console.error("Fehler beim Laden der JSON-Datei:", error);
    });
}

function fillWeapons() {
  fetch("weapons.json")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 3; i++) {
        let weapon = data.Weapons[i];
        let row = document.getElementsByTagName("tr")[i + 1];
        row.cells[0].getElementsByTagName("input")[0].value = weapon.Name;
        row.cells[1].getElementsByTagName("input")[0].value = weapon["HS%"];
        row.cells[2].getElementsByTagName("input")[0].value = weapon["K/D"];
      }
    })
    .catch((error) => {
      console.error("Error loading JSON file:", error);
    });
}
