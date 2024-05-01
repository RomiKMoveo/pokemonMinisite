import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';



@Component({
selector: 'app-my-map',
standalone: true,
imports: [ 
],
templateUrl: './my-map.component.html',
styleUrl: './my-map.component.scss'
})
export class MyMapComponent implements AfterViewInit{
  title = 'angular-gmap';
  @ViewChild('mapContainer', { static: false }) 
  gmap?: ElementRef;

  map?: google.maps.Map;
  lat = 32.0624076;
  lng = 34.7707653;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 15
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map
  });

  @ViewChild('searchInput', { static: false })
  searchInput!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap?.nativeElement, 
    this.mapOptions);
    this.marker.setMap(this.map);
    this.setupAutocomplete(this.searchInput)
  }

  calcRoute(): void {

  }

  resetMap(searchInput: HTMLInputElement): void {

  }

  changeMapStyle(): void {

  }

  setupAutocomplete(searchInput: ElementRef<HTMLInputElement>): void {
    const autocomplete = new google.maps.places.Autocomplete(searchInput.nativeElement);
    autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace();
      if (!place.geometry || !place.geometry.location) {
        return;
      }
      const location = place.geometry.location;
      const coordinates = new google.maps.LatLng(location.lat(), location.lng());

      this.map?.setCenter(coordinates);
      this.marker.setPosition(coordinates);
      this.map?.setZoom(10);
    });
  }
}