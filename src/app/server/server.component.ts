import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
        .online{
            color:white;
        }
    `]
})

export class ServerComponent {
    serverId:number = 100;
    serverStatus:string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }

    //serverStatus mathod작성해서 server.component.html에서 data calling하기
    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red'
        //check the serverStatus & if is equal to online, return green, otherwise return red.
    }
}