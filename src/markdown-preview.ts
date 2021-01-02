import { bindable, BindingMode } from "aurelia";

import markdown from 'markdown-it';

export class MarkdownPreview {

    @bindable({ 
        mode: BindingMode.twoWay   
      })
    public content: string = '';

    public markdownPreview: string = '';

    public attached() {
        this.markdownPreview = markdown().render(this.content);
    }

    public contentChanged(newValue, oldValue) {
        this.markdownPreview = markdown().render(newValue);
    }
}


