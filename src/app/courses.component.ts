import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ "Title: " + title }}</h2>
        <ul>
            <li *ngFor="let cr of courses">
                {{ cr }}
            </li>
        </ul>
    `
})
export class CoursesComponent{
    title = 'List of courses';
    courses = ["crs1", "crs2", "crs3"];

    constructor(service: CoursesService){
        this.courses=service.getCourses();
    }
}