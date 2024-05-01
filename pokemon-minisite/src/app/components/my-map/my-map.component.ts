import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { myMapStyle } from './my-map-style';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
selector: 'app-my-map',
standalone: true,
imports: [ 
  CommonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  FormsModule
],
templateUrl: './my-map.component.html',
styleUrl: './my-map.component.scss'
})
export class MyMapComponent implements AfterViewInit{
  @ViewChild('mapContainer', { static: false }) 
  gmap!: ElementRef;

  map!: google.maps.Map;
  lat = 32.0624076;
  lng = 34.7707653;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 15
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    title: "Office"
  });
  
  @Input()  placeholder=""; 
  @ViewChild('searchInput')
  searchInput!: ElementRef;
  autocomplete: google.maps.places.Autocomplete | undefined;

  private directionsService = new google.maps.DirectionsService();
  private directionsRenderer = new google.maps.DirectionsRenderer();
  readonly homeCoordinates = {
    lat: 32.055010,
    lng: 34.856850
  };
  readonly officeCoordinates = {
    lat: 32.0624076,
    lng: 34.7707653
  };

  isStyleChanged: boolean = false;

  ngAfterViewInit() {
    this.mapInitializer();
    this.initAutocomplete();
  }

  mapInitializer(): void {
    this.map = new google.maps.Map(this.gmap?.nativeElement, this.mapOptions);
    this.marker.setMap(this.map);
  }

  initAutocomplete(): void {
    this.autocomplete = new google.maps.places.Autocomplete(this.searchInput.nativeElement);
    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete?.getPlace();
      if (!place?.geometry || !place.geometry.location) {
        return;
      }
      else{
        const location = place.geometry.location;
        const coordinates = new google.maps.LatLng(location?.lat(), location?.lng());

        this.map?.setCenter(coordinates);
        this.marker.setPosition(coordinates);
        this.map?.setZoom(15);
      }
      
    });
    
  }

  getDirections(): void {
    const request = {
      origin: this.homeCoordinates,
      destination: this.officeCoordinates,
      travelMode: google.maps.TravelMode.DRIVING,
    };
    this.directionsRenderer.setMap(this.map);
    this.directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        this.directionsRenderer.setDirections(result);
      }
    });
  }
  
  resetMap(): void {
    this.searchInput.nativeElement.value = '';
    this.map.setCenter(this.officeCoordinates);
    this.marker.setPosition(this.officeCoordinates);
    this.map.setZoom(15);
    this.directionsRenderer.setMap(null);
  }
  changeMapsStyle(): void {
    this.isStyleChanged = !this.isStyleChanged;
    this.map.setOptions({ styles: this.isStyleChanged ? myMapStyle : [] });
}

}