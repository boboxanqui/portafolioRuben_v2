import { Injectable } from '@angular/core';
import { message } from 'src/app/interfaces/interfaces';
import { environment } from '../../../environments/environment';
import '../../../assets/smtp.js'; 
import { Observable, Subject } from 'rxjs';

declare let Email: any;

@Injectable({
  providedIn: 'root'
})
export class MailingService {

  constructor() { }

  private _mailStatus = new Subject<string>()

  sendEmail( message: message ){
    this._mailStatus.next('sending')
    return Email.send({
      SecureToken: environment.smtp.secureToken,
      To: 'daxter2424@hotmail.com',
      From: `${message.name} - ${message.email}`,
      Subject: message.subject,
      Body: `<p> ${message.body} </p>
            <p><i> ${message.name} </i></p>`
    }).then( () => this._mailStatus.next('sent') )
      .catch( () => this._mailStatus.error('error'));
  }

  get mailStatus$(): Observable<string>{
    return this._mailStatus
  }
}
