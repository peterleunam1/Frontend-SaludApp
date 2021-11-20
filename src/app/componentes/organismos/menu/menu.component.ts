import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  openMenu() {
    const menu: Element | null = document.querySelector('#nav');
    const menuItems: NodeListOf<Element> | null = document.querySelectorAll('.menu-item');
    const logotype: Element | null = document.querySelector('#logotype');
    const menuLi: Element | null = document.querySelector('#menuLi');
    const cerrar: Element | null = document.querySelector('#cerrar');
    const icon: Element | null = document.querySelector('#icon');
    menuItems.forEach((item: Element) => {
      item.classList.toggle('active');
    });
    logotype?.classList.toggle('active');
    menu?.classList.toggle('active');
    menuLi?.classList.toggle('active');
    cerrar?.classList.toggle('active');
    icon?.classList.toggle('active');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
