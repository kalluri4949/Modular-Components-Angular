import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
data = [
  {
    name: 'rakesh',
    age: 27,
    job: 'Ui Developer'
  },
  {
    name: 'veena',
    age: 27,
    job: 'Front End Developer'
  },
  {
    name: 'venky',
    age: 28,
    job: 'React Developer'
  },
];
headers = [
  {
    key: 'name',
    label: 'Name'
  },
  {
    key: 'age',
    label: 'Age'
  },
  {
    key: 'job',
    label: 'Job'
  },
];
  constructor() { }

  ngOnInit(): void {
  }

}
