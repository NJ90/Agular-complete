import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles:[`
  h3 {
    color: dodgerblue
  }
  `]//styles를 선언한 뒤 backticks로 multiple line의 inline css 작성 가능, 마찬가지로 간단한 css일 때만 사용
})
export class AppComponent {
  name = 'Agular-complete';
}
