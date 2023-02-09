import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HelpPageService } from './help-page.service';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.css']
})
export class HelpPageComponent {
  @Input() pageId: string = 'page1';
  @Output() nodeClick = new EventEmitter<any>();
  treeStructure: any;
  content: any;

  constructor(private helpPageService: HelpPageService) { }

  ngOnInit() {
    this.helpPageService.getTreeStructure().subscribe((treeStructure: any) => {
      console.log(treeStructure);
      this.treeStructure = treeStructure;
    });

    this.helpPageService.getPageContents(this.pageId).subscribe((content: any) => {
      console.log(content);
      this.content = content;
    });

  }

  onNodeClick(node: any) {
    console.log("node", node);
    this.pageId = node.pageId;
    this.helpPageService.getPageContents(this.pageId).subscribe((content: any) => {
      this.content = content;
    });
  }

}
