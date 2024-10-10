import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignation } from '../master/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{
     masterservice = inject(MasterService);

     designationList : IDesignation[] = [];
      isLoader: boolean = true;

     ngOnInit(): void {
         this.masterservice.getDesignation().subscribe((res: APIResponseModel) => {
          this.designationList = res.data;
          this.isLoader = false;
     },error=>{
         alert("Designation Component Error")
     });

}
}
