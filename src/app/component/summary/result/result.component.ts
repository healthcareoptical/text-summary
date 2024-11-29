import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent {
  @Input() title: string = '';
  @Input() summary: string = '';
  @Input() newWords: string[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  getHighlightedSummary(): SafeHtml {
    const words = this.summary.split(' ');
    const summary = words
      .map(word => {
        if (this.newWords.includes(word.toLowerCase())) {
          return `<span style="color:red;font-weight: bold;">${word}</span>`;
        }
        return word;
      })
      .join(' ');

    return this.sanitizer.bypassSecurityTrustHtml(summary);
  }
}
