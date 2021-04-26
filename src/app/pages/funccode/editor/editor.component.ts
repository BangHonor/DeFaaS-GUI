import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Funccode, FunccodeService } from '../../../core/funccode/funccode.service';

import { NzModalService } from 'ng-zorro-antd/modal';
import { EditorOptions } from 'ng-zorro-antd/code-editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {

  funccode: Funccode;

  // doc see:
  // https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.istandaloneeditorconstructionoptions.html
  editorOption: EditorOptions = {
    language: 'typescript',
    theme: 'vs-dark',
  };

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private funccodeService: FunccodeService,
    // private modal: NzModalService,
  ) { }

  ngOnInit(): void {
    this.reloadFunccode()
  }

  goBack(): void {
    this.location.back();
  }

  reloadFunccode(): void {

    const name = this.route.snapshot.paramMap.get("name");

    this.funccodeService.getFunccode(name).
      subscribe(funccode => {
        this.funccode = funccode;
      });

    this.editorOption = {
      language: this.funccode.language,
      theme: 'vs-dark',
    }
  }

}
