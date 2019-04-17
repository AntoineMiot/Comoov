import {Component, ElementRef, NgZone, ViewChild} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
declare var google: any;

@Component({
  selector: 'app-conducteur-carte',
  templateUrl: './conducteur-carte.page.html',
  styleUrls: ['./conducteur-carte.page.scss'],
})

export class GGMaps {
  @ViewChild('Map') mapElement: ElementRef;
  map: any;
  mapOptions: any;
  location = {lat: null, lng: null};
  markerOptions: any = {position: null, map: null, title: null};
  marker: any;
  apiKey: String = 'AIzaSyAxk7XVX99nwt8Ek079u_EkY18ForFJoFg'; /*Your API Key*/

constructor(public zone: NgZone, public geolocation: Geolocation) {

    /*Get Current location*/
        this.geolocation.getCurrentPosition().then((position) =>  {
            console.log("Getting_GPS_position")
            this.location.lat = position.coords.latitude;
            console.log("Lat", this.location.lat)
            this.location.lng = position.coords.longitude;
            console.log("Lng", this.location.lng)
        });
    /*Map options*/
    this.mapOptions = {
        center: this.location,
        zoom: 21,
        mapTypeControl: true
    };
    setTimeout(() => {
        this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
        /*Marker Options*/
        this.markerOptions.position = this.location;
        this.markerOptions.map = this.map;
        this.markerOptions.title = 'My Location';
        this.marker = new google.maps.Marker(this.markerOptions);
    }, 3000);

    /*load google map script dynamically */
    const script = document.createElement('script');
    script.id = 'googleMap';
    if (this.apiKey) {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
    } else {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=';
    }
    document.head.appendChild(script);
  }
}