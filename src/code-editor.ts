import { bindable, BindingMode } from 'aurelia';
import * as monaco from 'monaco-editor';

export class CodeEditor {
  public container: HTMLDivElement;

  @bindable({ 
    mode: BindingMode.twoWay   
  })
  public content: string = '';

  public attached() {
    var editor = monaco.editor.create(this.container, {
      value: [
        '# Hello world',
      ].join('\n'),
      language: 'markdown',
      theme: 'vs-dark',
      automaticLayout: true,
      lineNumbersMinChars: 3,
      mouseWheelZoom: true,
    });
    editor.onDidChangeModelContent((event) => {
      console.log('content changed');
      var value = editor.getModel().getValue();
      this.content = value;
    });
  }
}
