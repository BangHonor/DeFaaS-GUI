import { Pipe, PipeTransform } from '@angular/core';
import marked from "marked";

@Pipe({
  name: 'markdown'
})

export class MarkdownPipe implements PipeTransform {

  // see: https://www.positronx.io/create-custom-markdown-pipe-in-angular-to-parse-html/
  // more: https://github.com/jfcere/ngx-markdown

  transform(value: any, args?: any[]): any {
    if (value && value.length > 0) {
      return marked(value);
    }
    return value;
  }

}