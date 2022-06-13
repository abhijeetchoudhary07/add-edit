import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  form: any;
  
  constructor() { }
Id :any;
  data:any =[]
  
 @ViewChild('editForm')
 editForm!: NgForm;

  add(item:any){
    this.data.push(item)
    console.log(item);
  this.form = item  }
  edit(index:any){
    this.Id = index
    this.editForm.setValue({
      id : this.data[index].id,
      name :this.data[index].name,
      email : this.data[index].email,
      contact : this.data[index].contact
    }) 
  }

  delete(ele:any, index:any){
      this.data.forEach((value: any,index: any)=>{
        if(ele == value)
        this.data.splice(index,1)
      }) 

  }

  editData(){
this.data[this.Id]=(this.editForm.value)
  }

  ngOnInit(): void {
  }

}
