import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  featureLeader: Leader;

  constructor(private dishservice: DishService,
    private promotionService: PromotionService,
    private LeaderService: LeaderService) { }

    ngOnInit() {
      this.dish = this.dishservice.getFeaturedDish();
      this.promotion = this.promotionService.getFeaturedPromotion();
      this.featureLeader = this.LeaderService.getFeaturedLeader();
    }

}