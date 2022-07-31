import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { message } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { MailingService } from '../services/mailing.service';
import { notARobotService } from '../services/notARobot.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.scss'  ]
})
export class ContactComponent implements OnInit {
  
  constructor( 
    private fb: FormBuilder,
    private notARobot: notARobotService,
    private mailing: MailingService
  ) {
      this.operationResult = 2
    }
    
    ngOnInit(): void {
      this.submitted = false;
      // this.notARobot.newOperation();
      // console.log(this.operationResult);
      this.mailing.mailStatus$
        .subscribe( resp => {
          this.statusMail = resp 
          if( resp === 'sent'){
            this.launchAlert()
            this.submitted = false;
            this.contactForm.reset({
              mensaje: ''
            })
          }
        })
      
    }

  @ViewChild( 'alert', {static: false} ) alert: NgbAlert | undefined
    
  emailPattern: RegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  submitted:boolean = false;
  operationResult: number = 0
  siteKey: string = environment.reCaptcha.webKey
  statusMail: string = '';
  showAlert: boolean = false;

  contactForm: FormGroup = this.fb.group({
    nombre: [ '', [Validators.required, Validators.minLength(2)] ],
    email: [ '', [Validators.required, Validators.pattern(this.emailPattern)] ],
    asunto: [ '', [Validators.required, Validators.minLength(2)] ],
    mensaje: [ '', [Validators.required, Validators.maxLength(500)] ],
    // operation: ['', [Validators.required ] ],
    recaptcha: ['', [Validators.required] ]
  })

  inputValid( input: string ):boolean {
    return this.contactForm.controls[input].valid && this.submitted
  }

  inputInvalid( input: string ):boolean {
    return this.contactForm.controls[input].invalid && this.submitted
  }

  inputLength( input: string ):number {
    return this.contactForm.get(input)?.value.length
  }

  mensajeError(){
    if( this.contactForm.controls['mensaje'].errors?.['required']){
      return 'Mensaje obligatorio'
    } else if (this.contactForm.controls['mensaje'].errors?.['maxlength']){
      return 'Mensaje demasiado largo, máximo 500 carácteres.'
    }
    return
  }

  formValid(){
    return this.contactForm.valid
  }

  formStatus(){
    return this.contactForm.status
  }

  onSubmit(){
    this.submitted = true;
    if( this.formValid() ){
      const newMessage: message = {
        name: this.contactForm.get('nombre')?.value,
        email: this.contactForm.get('email')?.value,
        subject: this.contactForm.get('asunto')?.value,
        body: this.contactForm.get('mensaje')?.value,
      }
      this.mailing.sendEmail( newMessage )      
    }
  }

  launchAlert(){
    this.showAlert = true;
    setTimeout( () => this.showAlert = false, 3000)
  }

  // ReCaptcha

  resolved( response: string ){
    console.log(response);
  }

  errorFound( response: any ){
    console.log(response);
    
  }


  // Not A Robot Service METHODS 

  get num1() {
    return this.notARobot.num1
  }
  get num2() {
    return this.notARobot.num2
  }
  get operator() {
    return this.notARobot.operator
  }

  checkResult( control: AbstractControl ): ValidationErrors | null {
    // if( this.operationResult === undefined ) return { result: false }
    if( control.value === this.operationResult ){
      return null
    }
    return { result: false }
  }


  isOdd( control: FormControl ){
    return control.value % 2 ? { less: true } : null
  }

  isTwoFromService ( control: FormControl ){
    if( this.notARobot.isTwo( control.value ) ) return { odd: true }
    return null
  }

}
