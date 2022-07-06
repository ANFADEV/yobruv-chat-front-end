import { Component, OnInit, Input } from '@angular/core';
import { faArrowLeft, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faEllipsisVertical = faEllipsisVertical;

  goBack = () => {
    this._location.back();
  };

  @Input() title:string = "Yobruv";
  @Input() settingBtn:boolean = true;
  @Input() goBackBtn:boolean = true;

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

}
