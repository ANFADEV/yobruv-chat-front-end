import { Component, OnInit, Input } from '@angular/core';
import { faArrowLeft, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faEllipsisVertical = faEllipsisVertical;

  @Input() title = "Yobruv";

  constructor() { }

  ngOnInit(): void {
  }

}
