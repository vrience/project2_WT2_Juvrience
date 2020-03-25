import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../hero';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  heroes: Hero[];
  displayedColumns: string[] = ['heroName', 'realName', 'skill', 'universe'];

  constructor() {}

  ngOnInit(): void {}
}
