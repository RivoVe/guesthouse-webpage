import { Component, OnInit } from '@angular/core';
import {  FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ExtrasService } from 'src/app/shared/services/extrasService';

const baseUrl = 'http://localhost:4200/addExtra'



@Component({
  selector: 'app-add-extra',
  templateUrl: './add-extra.component.html',
  styleUrls: ['./add-extra.component.scss']
})
export class AddExtraComponent implements OnInit {
  addExtrasForm!: FormGroup;


  constructor(private extrasService: ExtrasService) { }

  ngOnInit(): void {
    this.addExtrasForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
      extrasImages: new FormControl(),
      active: new FormControl()
    })
  }

  onSubmit(): void {
    this.extrasService.createExtra(this.addExtrasForm.value).subscribe(() => {
      this.addExtrasForm.reset();
      

    })
  }


}
