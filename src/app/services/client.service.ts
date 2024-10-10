import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { client } from '../component/master/class/client';
import { environment } from '../../environments/environment';
import { APIResponseModel } from '../component/master/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { 
  }
  getApiClients(): Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.api_url+'GetAllClients')
  }
  addUpdate(obj:client): Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.api_url+'AddUpdateClient',obj)
  }
  deleteClientById(id:number): Observable<APIResponseModel>{
    return this.http.delete<APIResponseModel>(environment.api_url+'DeleteClientByClientId?clientId='+id)
  }
}
