import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer/customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cpfValidator } from '../validators/cpfValidator';
import { rgValidator } from '../validators/rgValidator';
import { phoneNumberValidator } from '../validators/phoneNumberValidator';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = {
    name: '',
    cpf: '',
    rg: '',
    birth_date: new Date,
    address: '',
    phone_number: '',
    email: '',
    create_date: new Date

  }

  formulario!: FormGroup

  constructor(
    private service: CustomerService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      name: ['', [Validators.required]],
      cpf: ['', [Validators.required, cpfValidator()]],
      rg: ['', [Validators.required, rgValidator()]],
      birth_date: ['', [Validators.required]],
      address: ['', Validators.required],
      phone_number: ['', Validators.required, phoneNumberValidator()],
      email: ['', [Validators.email]],
      create_date: ['', Validators.required]
    })
  }

  createCustomer(): void {
    if(this.formulario.valid) {
      this.service.create(this.formulario.value).subscribe(() => {
        this.router.navigate(['/home'])
      })
    }
  }

  cancelCustomer() {
    this.router.navigate(['/home'])
  }

  habilitarBotao() {
    return this.formulario.valid ? 'botao' : 'botao__desabilitado'
  }
}
