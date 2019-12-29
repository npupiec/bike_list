import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ListService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get('http://www.poznan.pl/mim/plan/map_service.html?mtype=pub_transport&co=stacje_rowerowe');
  }
}
