import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent {
  @Input() title: String | undefined;
  @Input() imageUrl: String | undefined;
  @Input() caption: String | undefined;

}
