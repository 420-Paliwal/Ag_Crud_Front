import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponseModel } from '../component/master/interface/role';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }


  getDesignation():Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation');
  }

  addEmployee(data:any):Observable<any>{
return this.http.post("http://localhost:8080/api/v1/tutorials",data)
  }

  getAllEmployee():Observable<any>{
    return this.http.get("http://localhost:8080/api/v1/employees")
  }
}
