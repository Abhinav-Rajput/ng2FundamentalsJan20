import {Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector:'meeting-thumbnail',
  template:`
    <div class="well hoverwell thumbnail">
     <h2>{{events?.name}}</h2>
    <div>Date:  {{events?.date}}</div>
    <div [ngClass]="getStartTimeClass()" [ngSwitch]="events?.time">Time: {{events?.time}}
        <span *ngSwitchCase="'8:00 am'"> (Eary Start)</span>
        <span *ngSwitchCase="'10:00 am'"> (Late Start)</span>
        <span *ngSwitchDefault> (Normal Start)</span>
    </div>  
    
    <div>Price: \${{events?.price}}</div>
    <div *ngIf="events?.location">
        <span>Location: {{events?.location?.address}}</span>
        <span class="pad-left"></span>
        <span>{{events?.location?.city}}, {{events?.location?.country}}</span>
    </div>
<div *ngIf="events?.onlineUrl">Online URL: {{events?.onlineUrl}}
</div>
  
    </div>`
    ,
    styles:[`
    .green {color: #003300 !important;}
    .bold {font-weight: bold;}
    .thumbnail {min-height: 210px;}
    .pad-left { margin-left: 10px; }
    
    `
    ]
})

export class MeetingThumbnailComponet{
 @Input() events : any
 
 getStartTimeClass(){
     //object implementation
    // const isEarlyStart = this.events && this.events.time ==='8:00 am'
    // return {green: isEarlyStart, bold:isEarlyStart}

    // return strin implementation
    // if(this.events && this.events.time === '8:00 am')
    //     return 'green bold'
    // return ''

    // return array implementation
     if(this.events && this.events.time === '8:00 am')
        return ['green','bold']
    return []
 }
}