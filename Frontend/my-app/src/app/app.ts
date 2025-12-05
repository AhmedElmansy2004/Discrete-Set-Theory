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
  numberOfSubsets: number = 0;
  subsets: string[][] = [];
  available: string[] = [...this.universalSet];

  getRange(n: number) {
    return Array.from({length: n}, (_, i) => i);
  }

  increaseNumber(count: number){
    switch (count){
      case 0:
        this.numOfUElements++;
        console.log(this.numOfUElements)
        break;

      default:
        break;
    }

    console.log(this.numOfUElements)

  }

  decreaseNumber(count: number){
    switch (count){
      case 0:
        if(this.numOfUElements > 0) this.numOfUElements--;
        break;

      default:
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
