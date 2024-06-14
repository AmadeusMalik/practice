import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  standalone: true,
    imports: [
      CommonModule,
  ]
})
export class ProductPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
