export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }
  
  updateMarkers(benches) {
    console.log(benches);
    benches.forEach(bench => {
      if (!Object.keys(this.markers).includes(bench.id)) {
        this.createMarkerFromBench(bench);
      } 
    });
    console.log("benches are", this.markers);
    
  }

  createMarkerFromBench(bench) {
    let marker = new google.maps.Marker({
      position: {lat: bench.lat, lng: bench.lng},
      map: this.map,
      title: bench.description
    });

    this.markers[bench.id] = marker;
  }

}
