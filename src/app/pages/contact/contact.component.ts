import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.scss'  ]
})
export class ContactComponent implements OnInit {

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
      this.submitted = false;
  }

  emailPattern: RegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  submitted:boolean = false;

  contactForm: FormGroup = this.fb.group({
    nombre: [ '', [Validators.required, Validators.minLength(2)] ],
    email: [ '', [Validators.required, Validators.pattern(this.emailPattern)] ],
    asunto: [ '', [Validators.required, Validators.minLength(2)] ],
    mensaje: [ '', [Validators.required, Validators.maxLength(500)] ]
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
      return 'Mensaje demasiado largo, máximo 500 carácteres'
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

  }

}
