import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import Swall from "sweetalert2";
import {Location} from "../../models/model"
@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

  public location:Location
  public data:any[]=[]
  constructor(private service:ServiceService) { 
    this.service.listLocations().subscribe((data:any)=>{
      console.log('here',data.location);
       for (const dato of data.location) {
        this.location=new Location(dato.id, dato.name,dato.area,dato.location)
        console.log(dato);
        console.log(this.location);
      this.data.push(this.location)
      } 
    }, err=>{
      console.log(err);
      Swall.fire({
        title:'Erorr',
        icon:'error'
      })
    })
    //console.log('out '+this.data);

  }

  ngOnInit(): void {
  }

}
