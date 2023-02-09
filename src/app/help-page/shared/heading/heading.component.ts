import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadingComponent {
  @Input() text: any

}
