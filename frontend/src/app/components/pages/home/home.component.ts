import { Component, NgModule, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from "../../partials/search/search.component";
import { TagsComponent } from "../../partials/tags/tags.component";
import { NotFoundComponent } from "../../partials/not-found/not-found.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, RouterLink, RouterOutlet, /*RatingModule, */ FormsModule, SearchComponent, TagsComponent, NotFoundComponent]
})
export class HomeComponent implements OnInit {

  foods:Food[]= [];
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) /* search term */
      this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
    else if (params.tag) /* search Tags */
    this.foods = this.foodService.getAllFoodsByTag(params.tag);
  else
    this.foods = foodService.getAll();
  })
  
  }
  ngOnInit(): void {
    
  }
}