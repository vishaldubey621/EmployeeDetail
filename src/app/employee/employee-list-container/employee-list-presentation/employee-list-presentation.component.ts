import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Employee } from '../../employee.model';
import { EmployeeListPresenterService } from '../employee-list-presenter/employee-list-presenter.service';

@Component({
  selector: 'app-employee-list-presentation',
  templateUrl: './employee-list-presentation.component.html',
  styleUrls: ['./employee-list-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [EmployeeListPresenterService]
})
export class EmployeeListPresentationComponent implements OnInit {
  nameSearch:string= ''
  search= '';
  SortbyParam= '';
  p: number = 1;
  //function for search button
  onfilter()
  {
      this.search = this.nameSearch 
  }
  //function for clear button
  onfilterclear()
  {
    this.nameSearch ='',
    this.search=''
  }
 
  // function for multiselect
  checks = false;
  bulk(e)
  {
      if(e.target.checked== true)
      {
        this.checks=true;
      }
      else
      {
        this.checks=false;
      }
  }
  public bulkdelete()
  {
  //  this.EmployeeListPresenterService.deleteEmployee(this.checks)
  }
  private _employeeList: Employee[] = [];

  //call from presenter
  // public viewProfile(profileBtnRef: HTMLButtonElement) {
  //   this.EmployeeListPresenterService .viewProfileOverlay(profileBtnRef)
  // }


  //student-list-container => student-list-presentation
  @Input() public set employeeList(value: Employee[]) {
 
    if(value) {
      this._employeeList = value
    }
  }

  public get employeeList(): Employee[] {
   
    return this._employeeList
  }

  @Output() deleteId: EventEmitter<any> = new EventEmitter();
  
  constructor(private EmployeeListPresenterService: EmployeeListPresenterService) { 
    this.employeeList = [];
  }

  ngOnInit(): void {
    this.EmployeeListPresenterService.employeeId$.subscribe((employeeId) => {
      this.deleteId.emit(employeeId);
    });
  }

  public deleteEmployee(id: number) {
    this.EmployeeListPresenterService.deleteEmployee(id)
  }

}
