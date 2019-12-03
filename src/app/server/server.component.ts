import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})

export class ServerComponent {
    serverId:number = 100;
    serverStatus:string = 'offline';

    //serverStatus mathod작성해서 server.component.html에서 data calling하기
    getServerStatus(){
        return this.serverStatus;
    }
}