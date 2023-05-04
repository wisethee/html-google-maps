document.addEventListener("DOMContentLoaded", () => {
  const loc1 = document.getElementById("loc1");
  const loc2 = document.getElementById("loc2");

  let map;
  let marker;
  let loc = { lat: 51.75496070896898, lng: 0 - 0.3089833386297866 };

  const initMap = async () => {
    // The location of Uluru
    const position = { lat: -25.344, lng: 131.031 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { Marker } = await google.maps.importLibrary("marker");

    // The map, centered at Uluru
    map = new Map(document.getElementById("map"), {
      zoom: 12,
      center: loc,
    });

    // The marker, positioned at Uluru
    marker = new Marker({
      map: map,
      position: loc,
      title: "Uluru",
    });

    console.log("marker", marker);
  };

  loc1.addEventListener("click", () => {
    loc = { lat: 50.75496070896898, lng: 0 - 0.3089833386297866 };
    map.setCenter(loc);
    marker.setMap(null);
    marker.setMap(map);
    marker.setPosition(loc);
  });

  loc2.addEventListener("click", () => {
    loc = { lat: 52.75496070896898, lng: 0 - 0.3089833386297866 };
    map.setCenter(loc);
    marker.setMap(null);
    marker.setMap(map);
    marker.setPosition(loc);
  });

  initMap();
});
