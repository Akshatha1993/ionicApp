import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [[Camera]]
})
export class DashboardComponent implements OnInit {
  public base64Image: string;
  constructor(private router: Router, private camera : Camera) { }

  ngOnInit() {}
  logout(){
    this.router.navigate(['/login']);
  }
  takePicture(){
    Camera.getPicture({
      quality: 95,
        destinationType: Camera.DestinationType.FILE_URI,
        //sourceType : PictureSourceType,
        //encodingType : this.camera.EncodingType.PNG,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

}
