import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',         //1. selector 설정 방식 가장 기본적인 (app.component.html에 표현식과 함께 보면서 이해하기)
  // selector: '[app-servers]',    //2. selector를 attribute로
  //selector: '.app-servers',      //3. selector를 class명으로 
  
  //template: `
  //<app-server></app-server>
  //<app-server></app-server>`, // single quotation 대신 backticks을 사용해서 javascript, html을 표현할 수 있다(inline 방식). 코드 양이 적을 때, 3줄 이상이 되면 external file(templateUrl)로 옮기는 것이 좋다
  
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "no server was created";
  serverName='Test Server';
  serverCreated = false;
  servers = ['Test1' , 'Test2'] //*ngFor -  array생성

  constructor() { 
    setTimeout(() => { //same meaning with "function(){}"
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){//typically trigger에 on-붙인다
    this.serverCreated = true,
    this.servers.push(this.serverName),
    this.serverCreationStatus = 'server was created Name is:' + this.serverName
  }

  onUpdateServerName(event: any){
    console.log(event);
    // console > target > value: "test"
      this.serverName = (<HTMLInputElement>event.target).value;

  }
}
