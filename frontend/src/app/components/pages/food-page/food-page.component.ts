import { Component, OnDestroy, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";

@Component({
    selector: 'app-food-page',
    standalone: true,
    templateUrl: './food-page.component.html',
    styleUrl: './food-page.component.css',
    imports: [CommonModule, RouterLink, NotFoundComponent]
})
export class FoodPageComponent implements OnInit{

  food!: Food;
  constructor(activatedRoute:ActivatedRoute, foodService:FoodService, private cartService:CartService,
     private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) 
      this.food = foodService.getFoodById(params.id);
    })
  }
  ngOnInit(): void {  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
