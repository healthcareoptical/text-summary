import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SummaryResponse } from '../models/summaryResponse';

@Injectable({
  providedIn: 'root'
})
export class SummarizeService {

  private apiUrl = 'http://127.0.0.1:8000/summarize';

  constructor(private http: HttpClient) {}
  summarize(text: string, max: number): Observable<any> {
    const payload = { text, max };
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<SummaryResponse>(this.apiUrl, payload, { headers });
  }
}
