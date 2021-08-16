import { Injectable, ComponentRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { EmployeeFormPresentationComponent } from '../../employee-form-container/employee-form-presentation/employee-form-presentation.component';
import { Overlay,OverlayConfig,OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable()
export class EmployeeListPresenterService {

  public employeeId: Subject<any> = new Subject();
  public employeeId$: Observable<any>;
  overlay: any;

  constructor() { 
    this.employeeId$ = this.employeeId.asObservable();
  }

  public deleteEmployee(id: number) {
    console.log('Delete Id', id);
    this.employeeId.next(id);
  }

 //overlay function
  //   public viewProfileOverlay(profileBtnRef: HTMLButtonElement) {
  //   const componentRef: ComponentRef<EmployeeFormPresentationComponent> = this.overlayConfig (profileBtnRef);
  // }

  // public overlayConfig(profileBtn: HTMLButtonElement): ComponentRef<EmployeeFormPresentationComponent> {
  //   const overlayConfig: OverlayConfig = new OverlayConfig();

   
  //   overlayConfig.positionStrategy = this.overlay.position().global()
  //     .centerHorizontally()
  //     .centerVertically();

  //   overlayConfig.hasBackdrop = true;

  //   const overlayRef = this.overlay.create(overlayConfig);
  //   const portal: ComponentPortal<EmployeeFormPresentationComponent> = new ComponentPortal<EmployeeFormPresentationComponent>(EmployeeFormPresentationComponent);
  //   const componentRef: ComponentRef<EmployeeFormPresentationComponent> = overlayRef.attach(portal);
  //   componentRef.instance.user.subscribe((res: any) => {
  //     console.log(res);
  //   })

  //   overlayRef.backdropClick().subscribe(() => overlayRef.detach());

  //   return componentRef;
  // }
}