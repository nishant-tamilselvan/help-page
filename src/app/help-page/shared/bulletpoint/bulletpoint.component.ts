import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-bulletpoint',
  templateUrl: './bulletpoint.component.html',
  styleUrls: ['./bulletpoint.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulletpointComponent {
  @Input() points: any;
  @Input() title: any;


}
