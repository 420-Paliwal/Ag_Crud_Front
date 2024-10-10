import { client } from './../../../../tutorial/src/app/component/master/class/client';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterComponent } from '../../../../tutorial/src/app/services/master/master.component';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule, MasterComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  getdata: any[] = []

  constructor(private employee:MasterService){
    this.getAllEmployee()
  }


  getAllEmployee(){
    this.employee.getAllEmployee().subscribe(data =>{
      this.getdata = data
      console.log(this.getdata)
    })
  }


}
