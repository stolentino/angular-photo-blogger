import { Component, Input } from '@angular/core';
//import { stringify } from '@angular/core/src/facade/lang';
import { Entry } from '../shared/entry.model';

@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})

export class EntryComponent {
   @Input() entry: Entry;

   onCommentAdded(comment: {name: string; comment: string;}){
       this.entry.comments.push(comment);
   }
}

/*export class EntryComponent {
    title: string = 'My First Photo';
    photo: string = 'http://placehold.it/800x500?text=Angular Basics';
    description: string = 'A Description of My First Photo';
    comments: any[] = [
        {name: "John", comment: "A comment"},
        {name: "Jim", comment: "A comment"},
        {name: "Jen", comment: "A comment"}
    ]
}*/