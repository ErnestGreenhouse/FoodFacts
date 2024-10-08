import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nutritionist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nutritionist.component.html',
  styleUrls: ['./nutritionist.component.css']
})
export class NutritionistComponent implements OnInit {
  nutritionists: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://fake-api-jade-eta.vercel.app/nutritionists').subscribe((data) => {
      this.nutritionists = data;
    });
  }
}
