import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'eduardo';
  public nameUpper: string = 'EDUARDO';
  public fullName: string = 'EDaRdO De LA COTerA';

  public customDate: Date = new Date();

}
