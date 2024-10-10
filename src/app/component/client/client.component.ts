import { Component, inject, OnInit } from '@angular/core';
import { client } from '../master/class/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../master/interface/role';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
  clinetObj: client = new client();
  clientList: client[] = [];

  clientService = inject(ClientService)

  ngOnInit(): void {
      this.loadClient();
  }

  loadClient(){
    this.clientService.getApiClients().subscribe((res:APIResponseModel)=>{
      this.clientList = res.data;
    })
  }

  onSaveClient (){
    debugger;
     this.clientService.addUpdate(this.clinetObj).subscribe((res:APIResponseModel)=>{
      if(res.result){
        if(this.clinetObj.clientId != 0){
          alert("Client Update Successfully");
        }
        else{
          // alert("Client Create Successfully");
          Swal.fire("Client Create Successfully");
        }
        this.loadClient();
        this.clinetObj = new client();
      }else{
        alert(res.message)
      }
     })
  }

  onEdit(data: client){
    this.clinetObj = data;
  }

  onDelete(id:number){

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientService.deleteClientById(id).subscribe((res:APIResponseModel)=>{
          if(res.result){
            this.loadClient();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }else{
            Swal.fire({
              title: "Warning",
              text: res.message,
              icon:"warning"
            });
          }
         })

      }
    });

  }

}
