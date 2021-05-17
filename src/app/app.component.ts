import { Component } from '@angular/core';
import { Contact } from './models/contact';
import {FormGroup, FormControl, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bdAngular';

  addContactForm = new FormGroup({
    email: new FormControl('', Validators.pattern('^.+@.+\.nl$'))
  });

  name: string;
  constructor() {
    this.name = 'world!';
  }
  contacts: Contact[] = [
    { firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com' },
    { firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
    { firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' }
    ];
    newContact = {} as Contact;

    addContact(): void {
      console.log('Submitted value: ', this.addContactForm.value);
    }


    deleteContact(contact: Contact): void {
      let index = this.contacts.indexOf(contact);
      this.contacts.splice(index, 1);
    }
}
