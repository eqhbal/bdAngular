import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../../models/contact';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ContactService} from '../../services/contact.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'contact-form',
  templateUrl: './contact-form.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class ContactFormComponents implements OnInit {

  @Input() contact: Contact;

  addContactForm: FormGroup;

  newContact = {} as Contact;

  constructor(private fb: FormBuilder,
              private contactService: ContactService) { }


  // addContactForm = new FormGroup( {
  //   firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z -]+$')]],
  //   surname: ['', [Validators.required, Validators.pattern('^[a-zA-Z -]+$')]],
  //   email: new FormControl('', Validators.pattern('^.+@.+\.nl$'))
  // });

  ngOnInit(): void {
    this.addContactForm = new FormGroup({
      firstName: new FormControl(''),
      surname: new FormControl(''),
      email: new FormControl('', Validators.pattern('^.+@.+\.nl$'))
    });
  }

  addContact(form: NgForm): void {
    // console.log('Submitted value: ', this.addContactForm.value);
    this.contactService.addContact(this.newContact);
    this.newContact = {} as Contact;
    form.reset();
  }

  // tslint:disable-next-line:typedef
  addContactReactive() {
    this.contactService.addContact(this.addContactForm.value);
    this.addContactForm.reset();
  }

}
