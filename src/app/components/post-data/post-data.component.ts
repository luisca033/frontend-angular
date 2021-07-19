import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import Swall from "sweetalert2";
@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {

  public location:String
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }

  create(name,area){
    if(name==""||area==""){
      Swall.fire({
        title:'error',
        text:'Put the correct data in the fields'
      })
    }
    else{

      const position=navigator.geolocation.getCurrentPosition((pos:any)=>{
        this.location='latitude = '+pos.coords.latitude+ ' longitude'+pos.coords.longitude
        let data={
          name,
          area:Number(area),
          location:this.location
        }
        
         this.service.createLocation(data).subscribe((res:any)=>{
          Swall.fire({
            title:'Good',
            icon:'success',
            text:'Add location'
          })
        },err=>{
          console.log(err);
        } 
        )
      })
    }


  }
}
