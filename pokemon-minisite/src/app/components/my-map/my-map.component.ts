import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { myMapStyle } from './constants/my-map-style';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { Coordinates } from '../../interfaces/addres-search-result.interface';

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
  readonly homeCoordinates: Coordinates = {
    lat: 32.055010,
    lng: 34.856850
  };
  readonly officeCoordinates: Coordinates = {
    lat: 32.0624076,
    lng: 34.7707653
  };
  
  @ViewChild('mapContainer', { static: false }) 
  googleMap!: ElementRef;

  map!: google.maps.Map;
  marker!: google.maps.Marker;
  
  @Input()  placeholder=""; 
  @ViewChild('searchInput')
  searchInput!: ElementRef;
  autocomplete: google.maps.places.Autocomplete | undefined;

  private directionsRenderer = new google.maps.DirectionsRenderer();
  
  

  isStyleChanged: boolean = false;

  ngAfterViewInit() {
    this.mapInitializer();
    this.initAutocomplete();
  }

  mapInitializer(): void {
    const mapOptions: google.maps.MapOptions = {
      center: this.officeCoordinates,
      zoom: 15
    };

    this.marker = new google.maps.Marker({
      position: this.officeCoordinates,
      map: this.map,
      title: "Office"
    });

    this.map = new google.maps.Map(this.googleMap?.nativeElement, mapOptions);
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
    const directionsService = new google.maps.DirectionsService();
    
    const request = {
      origin: this.homeCoordinates,
      destination: this.officeCoordinates,
      travelMode: google.maps.TravelMode.DRIVING,
    };
    this.directionsRenderer.setMap(this.map);
    directionsService.route(request, (result, status) => {
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
    this.isStyleChanged = this.isStyleChanged;
    this.map.setOptions({ styles: this.isStyleChanged ? myMapStyle : [] });
}

}