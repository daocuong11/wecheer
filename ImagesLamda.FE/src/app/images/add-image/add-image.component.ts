import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
  }
  // TODO: Add validation if needed 
  imageForm = new FormGroup({
    imageUrl: new FormControl(''),
    description: new FormControl(''),
  });

  onSubmit() {
    // TODO: Add loading before call API (if system is slowly)
    let payload = {
      ...this.imageForm.value
    };
    this.dataService.addImage(payload).subscribe((data: any) => {
      // TODO: We will show the message to inform to user
      console.log(data);
      this.router.navigate(['/']);
    })
  }

}
