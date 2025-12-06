import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');

  numOfUElements: number = 2;
  universalSet: string[] = [];
  numOfSubsetElements: number[] = [];
  numberOfSubsets: number = 0;
  subsets: string[][] = [];
  available: string[] = [...this.universalSet];
  selectedOperation: string = "";

  onSubsetsChanged() {
    this.numOfSubsetElements = Array(this.numberOfSubsets).fill(1);
  }

  getRange(n: number) {
    return Array.from({length: n}, (_, i) => i);
  }

  increaseNumber(count: number){
    switch (count){
      case -1:
        this.numOfUElements++;
        console.log(this.numOfUElements)
        break;

      default:
        if(this.numOfSubsetElements[count] < this.numOfUElements) this.numOfSubsetElements[count]++;
        break;
    }

    console.log(this.numOfUElements)

  }

  decreaseNumber(count: number){
    switch (count){
      case -1:
        if(this.numOfUElements > 0) this.numOfUElements--;
        break;

      default:
        if(this.numOfSubsetElements[count] > 0) this.numOfSubsetElements[count]--;
        break;
    }

  }

  setAvailable(index: number){
    this.available.splice(index, 1);
  }

  resetAvailable(): string{
    this.available = [...this.universalSet];
    return "";
  }
}
