import {Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector:'meeting-thumbnail',
  template:`
    <div class="well hoverwell thumbnail">
     <h2>{{events?.name}}</h2>
    <div>Date:  {{events?.date}}</div>
    <div>Time: {{events?.time}}</div>    
    <div>Price: \${{events?.price}}</div>
    <div [hidden]="!events?.location">
        <span>Location: {{events?.location?.address}}</span>
        <span class="pad-left"></span>
        <span>{{events?.location?.city}}, {{events?.location?.country}}</span>
    </div>
<div [hidden]="!events?.onlineUrl">Online URL: {{events?.onlineUrl}}
</div>
  
    </div>`
    ,
    styles:[`
    .thumbnail {min-height: 210px;}
    .pad-left { margin-left: 10px; }
    
    `
    ]
})

export class MeetingThumbnailComponet{
 @Input() events : any
 
}