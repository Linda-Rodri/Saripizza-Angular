import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponsiveService } from '../../validators/responsiveMovil.component';

@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CartsComponent implements OnInit {
  isMobile!: boolean;

  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit(): void {
    this.responsiveService.isMobile().subscribe(
      result => {
        this.isMobile = result;
      }
    );
    
  }

  valor: number = 1;
  min: number = 1;
  max: number = 200;

  disminuir(): void {
    if (this.valor > this.min) {
      this.valor--;
    }
  }

  incrementar(): void {
    if (this.valor < this.max) {
      this.valor++;
    }
  }
}