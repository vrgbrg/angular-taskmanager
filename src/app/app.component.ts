import { Component, TemplateRef } from '@angular/core';
import { AppModel, AppInterface } from './app.model';
import { SignUpModel } from './sign-up.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public fullname?: string = '';
  public password?: string = '';
  public fullnameInvalid = true;
  public emailInvalid = true;

  modalRef: BsModalRef;

  public taskModel = new AppModel();

  public signUpModel: SignUpModel = new SignUpModel();

  public appImpl: AppInterface = <AppInterface>{};


  constructor(
    private modalService: BsModalService
  ) {
  }

  public showNewTask(modalContent: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modalContent);
  }

  public showAppModelValue(event: AppModel) {
    console.log(event);
  }

  changeChecked(isChecked: Event) {
    this.taskModel.checked = !!isChecked;

    /*
    if(isChecked) {
      this.appModel.checked = true;
    } else {
      this.appModel.checked = false;
    }
    */

  }


  public validateFullname(event: any) {
    if (!event.target.value) {
      this.fullnameInvalid = true;
      return;
    }
    const fullname = event.target.value;
    this.fullnameInvalid = !(fullname.charAt(0) === fullname.charAt(0).toUpperCase());
  }

  emailValidate(event: any) {
    if (!event.target.value) {
      this.emailInvalid = true;
      return;
    }
    const email: string = event.target.value;
    this.emailInvalid = !email.match(/^[a-zA-Z0-9\.-_]+@[a-zA-z0-9\.]+\.[a-zA-Z]+$/);
  }


  passwordColor() {
    if (this.password.length < 8 || this.password.match(/^[a-z0-9_\-]+$/)) {
      return 'red';
    } else if (this.password.length < 9 || this.password.length < 14 || this.password.match(/^[A-Za-z0-9_\-]+$/)) {
      return 'yellow';
    } else if (this.password.length >= 15 || this.password.match(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/)) {
      return 'green';
    }
  }

  public signUp() {

  }

}
