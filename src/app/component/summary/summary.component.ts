import { Component } from '@angular/core';
import { SummarizeService } from '../../services/summarize.service';
import { SummaryResponse } from 'src/app/models/summaryResponse';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})

export class SummaryComponent {

  constructor(private summarizeService: SummarizeService) {}

  isLoading: boolean = false;  
  hasResult: boolean = false;
  text: string = '';
  abstractiveTitle = 'Abstractive Summary';
  extractiveTitle = 'Extractive Summary';
  abstractiveSummary: string = '';
  extractiveSummary: string = '';
  abstractiveWords: string[] = [];
  extractiveWords: string[] = [];

  onButtonClick(): void {
    this.isLoading = true;
    this.summarizeService.summarize(this.text, 250).subscribe(
      (response: SummaryResponse) => {
        this.abstractiveSummary = response.abs_summary; 
        this.extractiveSummary = response.ext_summary;
        this.extractiveWords = response.ext_new_words;
        this.abstractiveWords = response.abs_new_words;
        this.isLoading = false;
        this.hasResult = true;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }
}
