import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare  var google:any;
@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  @ViewChild('map') mapRef:ElementRef;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    if(typeof google != "undefined"){
      this.showMap();  
    }
  }

  showMap(){ 
    const location = new google.maps.LatLng(42.347749,13.410752);
    const options={
      center: location,
      zoomControl:false,
      mapTypeControl:false,
      fullscreenControl:false,
      zoom: 15,
      streetViewControl:false,
      mapTypeId:'roadmap'
    }
    const map = new google.maps.Map(this.mapRef.nativeElement,options);

    this.addMarker(location,map);
  }


  addMarker(position,map){
    return new google.maps.Marker({
      position,map
    })
  }
  
  call(){
    setTimeout(() => {
         let tel = '0862080100';
         window.open(`tel:${tel}`, '_system');
       },100);
   }

}
