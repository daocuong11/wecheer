import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatIconModule,
} from '@angular/material/icon';
import {
  MatButtonModule,
} from '@angular/material/button';
import {
  MatCardModule,
} from '@angular/material/card';
import {
  MatProgressSpinnerModule,
} from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';

import { ImagesComponent } from './images.component';
import { AddImageComponent } from './add-image/add-image.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ImagesComponent
  },
  {
    path: 'add-image',
    component: AddImageComponent
  }
];

@NgModule({
  declarations: [
    ImagesComponent,
    AddImageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes),
  ]
})
export class ImagesModule { }
