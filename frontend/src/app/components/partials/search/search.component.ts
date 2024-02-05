import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  searchTerm = '';
  constructor(activatedroute: ActivatedRoute, private router:Router){
    activatedroute.params.subscribe((params) => {
      if (params.searchTerm)
      this.searchTerm = this.searchTerm = params.searchTerm;
  });
  }

  ngOnInit(): void {
  }

  search(term:string): void {
    if(term)
    this.router.navigateByUrl('/search/'+ term)
  }
}
