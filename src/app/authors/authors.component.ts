import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  myAuthors;
  constructor(service: AuthorsService) {
      this.myAuthors=service.getAuthors();
   }

  ngOnInit() {
  }

}
