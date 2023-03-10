import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParagraphComponent {
  @Input() text: any;

}
