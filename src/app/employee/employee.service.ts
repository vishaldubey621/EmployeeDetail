import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {
  constructor(private http : HttpClient) { }


  public addemployee(User)
   {
  
      return this.http.post('http://localhost:3000/employee',User).subscribe(
       data => {
         console.log('POST Request is successful ', data);
       },
       error => {
         console.log('Error', error);
       }
     );
   }
   
   public getEmployee()
   {
     
    return this.http.get('http://localhost:3000/employee'); 
   }
   
  //  public AutoRefresh( t ) {
  //    setTimeout("location.reload(true);", t);
  // }
   
 
   public deleteEmployee(data)
   {
     debugger
      return this.http.delete('http://localhost:3000/employee/' + data).subscribe(
       data => { window.confirm('Are you sure want to delete')
       
        
       },
       error => {
         console.log('Error', error);
       }
     );
   }

}
