import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-placefood',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule],
  templateUrl: './placefood.component.html',
  styleUrls: ['./placefood.component.css'],
})
export class PlacefoodComponent {}
