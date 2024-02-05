export class Food {
    id!:string; /* ! signifies required */
    name!:string;
    price!:number;
    tags?:string[]; /* ? signifies optional */
    favorite!:boolean;
    stars!:number;
    imageUrl!:string;
    origins!:string[];
    cookTime!:string;
}