import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';



@Component({
  selector: 'app-tree-structure',
  templateUrl: './tree-structure.component.html',
  styleUrls: ['./tree-structure.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeStructureComponent {
  @Input() treeStructure: any;
  @Output() nodeClick = new EventEmitter<any>();

  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();
  constructor() {
    this.dataSource.data = this.treeStructure;
    console.log(this.treeStructure);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['treeStructure'] && changes['treeStructure'].currentValue) {
      console.log(changes['treeStructure'].currentValue);

      this.dataSource.data = this.convertToTreeNodeArray(changes['treeStructure'].currentValue);
    }
  }

  convertToTreeNodeArray(obj: any): any[] {
    return Object.keys(obj).map(key => {
      return {
        nodeId: key,
        pageId: obj[key].pageId,
        name: obj[key].name,
        children: obj[key].children ? this.convertToTreeNodeArray(obj[key].children) : []
      };
    });
  }


  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;

  onNodeClick(node: any) {
    // Emit the node to the parent component
    this.nodeClick.emit(node);
  }


}
