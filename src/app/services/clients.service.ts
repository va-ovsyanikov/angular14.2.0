import { Injectable } from '@angular/core'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { IClients } from '../models/clients'
import { catchError, delay, Observable, throwError } from 'rxjs'
@Injectable({
    providedIn: 'root'
})
export class ClientsService {
    constructor(private http: HttpClient){
    }
    getAll(): Observable<IClients>{
     return   this.http.get<IClients>('http://localhost:3001/clients')
     .pipe(
        delay(500),
        catchError(this.errorHandler))
    }
    private errorHandler(error:HttpErrorResponse){
        console.log('Error ')
        return throwError(()=> error.message)
    }

}