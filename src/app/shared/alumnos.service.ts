import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { catchError, map, Observable, of } from 'rxjs';
import { StudentDTO } from './student.dto';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private csvUrl = 'assets/notas_alumnos-1.csv';
  constructor(private papa: Papa, private http: HttpClient) { }

  getData(): Observable<StudentDTO[]> {
   
    return this.http.get(this.csvUrl, { responseType: 'text' }).pipe(
      map((data) => {
        const parsedData = this.papa.parse(data, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            console.log('Parsed: ', result);
          },
        });

        const students: StudentDTO[] = parsedData.data.map((item: StudentDTO) => item );
        return students;
      }),
      catchError(error => {
        console.error('Error loading CSV file:', error);
        return of([]);
      })
    );
  }
}
