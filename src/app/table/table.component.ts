import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  male: any = 'male';
  female: any = 'female';
  other: any = 'other';
  mode: boolean = true;
  userid: any;
  newId: any;
  index: any;
  hide: boolean = true;

  constructor() {}
  hidedata() {
    this.hide = false;
  }
  loginForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    mobilenumber: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });

  data: any = [];

  onEdit(ele2: any, index: any) {
    this.newId = index;
    this.mode = false;
    this.loginForm.patchValue({
      name: this.data[index].name,
      mobilenumber: this.data[index].mobilenumber,
      gender: this.data[index].gender,
      email: this.data[index].email,
    });
    this.hide = false;
  }
  add() {
    if (this.mode) {
      this.loginForm.patchValue({
        id: this.data.length + 1,
      });
      this.data.push(this.loginForm.value);
      this.loginForm.reset();
      this.hide = true;
    } else {
      // this.data[this.newId].id = this.data.length+1;
      // this.data[this.newId].name = this.loginForm.get('name')?.value;
      // this.data[this.newId].mobilenumber = this.loginForm.get('mobilenumber')?.value;
      // this.data[this.newId].gender = this.loginForm.get('gender')?.value;
      // this.data[this.newId].email = this.loginForm.get('email')?.value;
      this.loginForm.patchValue({
        id: this.data.length,
      });
      this.data[this.newId] = this.loginForm.value;
      this.loginForm.reset();
      this.hide = true;
      this.mode = true;
    }
  }
  delete(ele1: any,index:any) {
    this.data.forEach((value: any, index: any) => {
      if (ele1 == value)
        this.data.splice(index, 1);

    })
  }

  ngOnInit(): void {}
}
