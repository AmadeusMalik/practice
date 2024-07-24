/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { userdata } from './userData';


import { FormControl, FormGroup, Validators } from '@angular/forms';
//PrimeNg
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
@Component({
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    ToolbarModule,
  InputTextModule,
  ImageModule,
  SidebarModule,
  RippleModule

  
    
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'practice';
  reactiveForm!: FormGroup;
  userData = [...userdata];
  sideBarVisible = false ;

  isSideBarVisible(){
  this.sideBarVisible = true;
  console.log("push");
  }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern('[a-zA-Z]*'),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[^i]*$/i),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl(''),
      country: new FormControl('', Validators.required),
      hobbies: new FormControl(''),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern(/^\+?\d{10,15}$/),
      ]),
    });
  }

  onSubmit() {
    this.userData.push(this.reactiveForm.value);
    console.log(this.reactiveForm);
  }
}
