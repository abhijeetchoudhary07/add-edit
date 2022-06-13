import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor() { }
mode :boolean =true
indexnumber:any;
  editForm = new FormGroup({
    id :new  FormControl ('',[Validators.required]),
    name:new  FormControl ('',[Validators.required]),
    email :new  FormControl ('',[Validators.required]),
    number :new  FormControl ('',[Validators.required]),
  })
 data:any= []

 addData(){
   console.log(this.editForm.value);
   
   this.data.push(this.editForm.value)
   this.mode = false
 }


edit(ele1:any, index:any){
  this.editForm.patchValue({
    id : this.data[index].id,
    name : this.data[index].name,
    email : this.data[index].email,
    number : this.data[index].number,
  })
  this.indexnumber = index
}

// editData(){
//   this.data[this.indexnumber].id = this.editForm.get('id')?.value,
//   this.data[this.indexnumber].name = this.editForm.get('name')?.value,
//   this.data[this.indexnumber].email = this.editForm.get('email')?.value,
//   this.data[this.indexnumber].number = this.editForm.get('number')?.value
// }
editData(){
  this.data[this.indexnumber]=(this.editForm.value)

}

delete(ele:any,index:any)
{
  this.data.forEach((value: any,index:any)=>{
    if(ele == value)
    this.data.splice(index,1)
  })

}

  ngOnInit(): void {
  }

}
