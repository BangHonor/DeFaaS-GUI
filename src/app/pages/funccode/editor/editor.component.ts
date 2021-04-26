import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Funccode, FunccodeService } from '../../../core/funccode/funccode.service';

import { NzModalService } from 'ng-zorro-antd/modal';
import { EditorOptions } from 'ng-zorro-antd/code-editor';


interface CodeEditorTab {
  tabName: string;
  code: string;
  codeEditorOption: EditorOptions;  // see: https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.istandaloneeditorconstructionoptions.html
}


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {

  funccode: Funccode;
  codeEditorTabs: CodeEditorTab[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private funccodeService: FunccodeService,
    private modal: NzModalService,
  ) { }

  ngOnInit(): void {
    this.reloadFunccode()

    console.log(this.codeEditorTabs)

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

    this.codeEditorTabs = this.funccode.files.map<CodeEditorTab>(
      file => {

        let tab: CodeEditorTab = {
          tabName: file.filename,
          code: file.code,
          codeEditorOption: {
            language: file.language,
            theme: 'vs-dark',
          },
        };

        return tab;
      });


  }
}
