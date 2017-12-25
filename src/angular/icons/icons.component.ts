import {Component, Input, PipeTransform, Pipe} from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
import { Icons } from '../utils/iconsMap';

export enum Positions{
    left,
    right,
    bottom,
    top
}

@Pipe({ name: 'safeHtml'})

export class SafeHtmlPipe implements PipeTransform  {
    constructor(private sanitized: DomSanitizer) {}
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}


@Component({
    selector:'sdc-icon',
    templateUrl:'./icons.component.html'
})


export class IconsComponent{
    @Input() iconName: string;
    @Input() label : string;
    @Input() labelPosition : string;
    @Input() color:string;

    public  getFontIconCode(name):string  {
        const testhtml =  Icons[this.iconName];
        return testhtml;
    }
}
