import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private csvUrl = 'assets/tareas.csv';
  constructor(private papa: Papa, private http: HttpClient) { }
 /*
  getData(): Observable<TaskDTO[]> {
   
    return this.http.get(this.csvUrl, { responseType: 'text' }).pipe(
      map((data) => {
        const parsedData = this.papa.parse(data, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            console.log('Parsed: ', result);
          },
        });

        const tasks: TaskDTO[] = parsedData.data.map((item: any) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          complete: item.complete === 'True' ? true : false,
          creation_date: item.creation_date,
        }));

        return tasks;
      }),
      catchError((error) => {
        console.error('Error loading CSV file:', error);
        return of([]);
      })
    );
  }*/
}
