import { ChangeDetectionStrategy, Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-help-content',
  templateUrl: './help-content.component.html',
  styleUrls: ['./help-content.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpContentComponent {
  @Input() content: any;
  PageTitle: any;


  ngOnChanges(changes: SimpleChanges) {
    if (changes['content'] && changes['content'].currentValue) {
      console.log(changes['content'].currentValue);

      this.content = changes['content'].currentValue.contents;
      this.PageTitle = changes['content'].currentValue.pageId;
    }
  }
}
