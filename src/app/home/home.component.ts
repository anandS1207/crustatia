import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  collapsed = true;
  isGame = false;
  isFaq = false;
  isAboutUs = false;
  isDefault = true;

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  constructor() { }

  ngOnInit() {
  }
  games() {
    console.log('coming');
    this.isGame = true;
    this.isDefault = false;
    this.isFaq = false;
    this.isAboutUs = false;
  }
  aboutUs() {
  this.isAboutUs = true;
  this.isGame = false;
    this.isDefault = false;
    this.isFaq = false;
  }
  faqs() {
this.isFaq = true;
this.isAboutUs = false;
  this.isGame = false;
    this.isDefault = false;

  }
  goHome() {
    this.isFaq = false;
    this.isAboutUs = false;
    this.isGame = false;
    this.isDefault = true;

  }
}
