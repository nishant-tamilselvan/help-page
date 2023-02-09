import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpPageRoutingModule } from './help-page-routing.module';
import { HelpPageComponent } from './help-page.component';
import { HelpContentComponent } from './help-content/help-content.component';
import { TreeStructureComponent } from './tree-structure/tree-structure.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { BulletpointComponent } from './shared/bulletpoint/bulletpoint.component';
import { HeadingComponent } from './shared/heading/heading.component';
import { ImageComponent } from './shared/image/image.component';
import { MatCardModule } from '@angular/material/card';
import { ParagraphComponent } from './shared/paragraph/paragraph.component';



@NgModule({
  declarations: [
    HelpPageComponent,
    HelpContentComponent,
    TreeStructureComponent,
    BulletpointComponent,
    HeadingComponent,
    ImageComponent,
    ParagraphComponent
  ],
  imports: [
    CommonModule,
    HelpPageRoutingModule,
    MatTreeModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [
    HelpContentComponent,
    TreeStructureComponent,
    BulletpointComponent,
    HeadingComponent,
    ImageComponent,
    ParagraphComponent
  ]
})
export class HelpPageModule { }
