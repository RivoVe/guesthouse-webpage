import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExtrasService } from 'src/app/shared/services/extrasService';


const baseUrl = 'http://localhost:4200/updateExtra/:id'

@Component({
  selector: 'app-update-extra',
  templateUrl: './update-extra.component.html',
  styleUrls: ['./update-extra.component.scss']
})
export class UpdateExtraComponent implements OnInit {
  updateExtrasForm!: FormGroup;

  constructor(private extrasService: ExtrasService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.updateExtrasForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
      extrasImages: new FormControl(),
      active: new FormControl()
    });

    this.route.params.subscribe(params => this.getExtra(params["id"]));

  }

  onSubmit(): void {
    this.extrasService.updateExtra(this.updateExtrasForm.value).subscribe(() => {
      this.router.navigateByUrl('/extras');
    })
  }

  getExtra(id: string): void {
    this.extrasService.get(id)
    .subscribe(
      {
        next: (res) => {
          console.log(res);
          this.updateExtrasForm.patchValue({
            id: res.id,
            name: res.name,
            description: res.description,
            price: res.price,
            extrasImages: res.extrasImages,
            active: res.active
          });


        console.log(this.updateExtrasForm);

        } ,
        error: (e) => console.error(e)
      }
    );
  }

}
