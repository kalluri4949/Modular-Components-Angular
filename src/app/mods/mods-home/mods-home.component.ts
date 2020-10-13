import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
openModal = false;
items = [
  {
    title: 'What is a dog?',
    content: 'A dog is a type of domesticated animal'
  },
  {
    title: 'What kinds of dogs are there?',
    content: 'There are many breeds of dogs. Each breed varies in size and temperament.'
  },
  {
    title: 'How do you acquire a dog?',
    content: 'Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.'
  }
];
  constructor() { }

  ngOnInit(): void {
  }
onClick(): void {
this.openModal = !this.openModal;
}
}
