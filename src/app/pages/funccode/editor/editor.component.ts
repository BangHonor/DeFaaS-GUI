import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {

  code = `
  func main() {
    return;
  };`

  constructor() { }

  ngOnInit(): void {
  }

}
