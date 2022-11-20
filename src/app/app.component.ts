import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'tree';

  data: Array<any> = [
    {
      id: 1,
      name: "Gramps",
      childrens: [
        {
          name: "Son"
        },
        {
          name: "Daughter"
        }
      ],
      mother: {

      },
      father: {

      },
      gender: 0, // 0 = male, 1 = female
      SO: {
        id: 2,
        name: "Maam"
      }
    }
  ];

  constructor() {

  }

  @ViewChild('mainCanvas', { static: false }) mainCanvas!: ElementRef

  public context!: CanvasRenderingContext2D;

  ngAfterViewInit(): void {

    this.mainCanvas.nativeElement.width = window.innerWidth
    this.mainCanvas.nativeElement.height = window.innerHeight

    this.mainCanvas.nativeElement.addEventListener('mousedown', (e: any) => {
      console.log(e);
    })
    this.context = this.mainCanvas.nativeElement.getContext('2d');

    console.log(this.context);

    this.context.beginPath();
    this.context.rect(20, 20, 150, 100);
    this.context.stroke();
    this.context.fillText(this.data[0].name, 30, 30)
  }

  drawAPerson(person: any) {

  }
}
