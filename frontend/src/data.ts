import { Food } from "./app/shared/models/Food";
import { Tag } from "./app/shared/models/Tag";

export const sample_foods: Food[] = [
   { 
        id: '3',
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: true,
        origins: ['USA', 'UK'],
        stars: 5.0,
        imageUrl: 'assets/food-3.jpg',
        tags: ['FastFood', 'Burger', 'Lunch', 'Hamburger'],
    },
    { 
        id: '4',
        name: 'Pasta Meatballs',
        price: 10,
        cookTime: '20-30',
        favorite: true,
        origins: ['Swedish', 'Latin'],
        stars: 4.0,
        imageUrl: 'assets/food-4.jpg',
        tags: ['SlowFood', 'Pasta', 'Meatballs'],
    },
    { 
        id: '5',
        name: 'Chicken soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: 'assets/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
    },
    {
        id: '6',
        name: 'Vegetable Pizza',
        price: 9,
        cookTime: '45-50',
        favorite: false,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: 'assets/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
    }
]

export const sample_tags: Tag[] = [
    { name: 'All', count: 6},
    { name: 'FastFood', count: 4},
    { name: 'Pizza', count: 2},
    { name: 'Lunch', count: 3},
    { name: 'SlowFood', count: 2},
    { name: 'Hamburger', count: 1},
    { name: 'Soup', count: 1},
    { name: 'Pasta', count: 1},
]