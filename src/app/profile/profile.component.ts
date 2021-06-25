import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  url: any = "";

  public imagePath: any;

  imageURL: any = "../../assets/profile.png";

  public message!: string;

  ngOnInit(): void {
  }

  onselect(event: any) {

    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = event => {
        this.url = event.target?.result;
      }
    }
  }

  fileChange(files: any) {
    if (files.length === 0)
      return;

    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported";
      return;
    }

    this.message = "";
    let reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);;
    reader.onload = (_event) => {
      this.imageURL = reader.result;
    }
  }

}
