import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SetService } from './service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Set Theory Operations');

  // Universal set
  numOfUElements: number = 2;
  universalSet: string[] = [];
  universeMap: { [key: string]: number } = {};
  isUniverseInitialized: boolean = false;

  // Subsets
  numberOfSubsets: number = 0;
  numOfSubsetElements: number[] = [];
  subsets: string[][] = [];
  bitRepresentations: number[] = [];

  // Operations
  selectedOperation: string = "";
  selectedSet1: number = -1;
  selectedSet2: number = -1;
  operationResult: string = "";
  resultBitRepresentation: number = 0;

  constructor(private setService: SetService) { }

  onSubsetsChanged() {
    this.numOfSubsetElements = Array(this.numberOfSubsets).fill(0);
    this.subsets = Array(this.numberOfSubsets).fill([]).map(() => []);
    this.bitRepresentations = Array(this.numberOfSubsets).fill(0);
  }

  getRange(n: number) {
    return Array.from({ length: n }, (_, i) => i);
  }

  increaseNumber(count: number) {
    switch (count) {
      case -1:
        this.numOfUElements++;
        break;

      default:
        if (this.numOfSubsetElements[count] < this.numOfUElements) {
          this.numOfSubsetElements[count]++;
        }
        break;
    }
  }

  decreaseNumber(count: number) {
    switch (count) {
      case -1:
        if (this.numOfUElements > 0) this.numOfUElements--;
        break;

      default:
        if (this.numOfSubsetElements[count] > 0) {
          this.numOfSubsetElements[count]--;
          // Remove the last element if decreasing
          if (this.subsets[count] && this.subsets[count].length > this.numOfSubsetElements[count]) {
            this.subsets[count].pop();
          }
        }
        break;
    }
  }

  // Initialize Universal Set
  initializeUniversalSet() {
    // Filter out empty values
    const validElements = this.universalSet.filter(el => el && el.trim() !== '');

    if (validElements.length === 0) {
      alert('Universal set cannot be empty!');
      return;
    }

    this.setService.initU(validElements).subscribe({
      next: (response) => {
        console.log('Universal set initialized:', response);
        this.universalSet = validElements;

        // Create universe map
        this.universeMap = {};
        validElements.forEach((el, index) => {
          this.universeMap[el] = index;
        });

        this.isUniverseInitialized = true;
        this.numOfUElements = validElements.length;
        alert('Universal set initialized successfully!');
      },
      error: (err) => {
        console.error('Error initializing universal set:', err);
        alert('Error initializing universal set!');
      }
    });
  }

  // Build subset bit representation
  buildSubsetBitRepresentation(subsetIndex: number, callback?: () => void) {
    if (!this.isUniverseInitialized) {
      alert('Please initialize the universal set first!');
      return;
    }

    const subset = this.subsets[subsetIndex].filter(el => el && el.trim() !== '');
    
    if (subset.length === 0) {
      this.bitRepresentations[subsetIndex] = 0;
      if (callback) callback();
      return;
    }

    // Build bit representation sequentially by chaining the append calls
    let bitRep = 0;
    let currentIndex = 0;

    const appendNext = () => {
      if (currentIndex >= subset.length) {
        this.bitRepresentations[subsetIndex] = bitRep;
        console.log(`Subset ${subsetIndex} bit representation:`, bitRep);
        if (callback) callback();
        return;
      }

      const element = subset[currentIndex];
      this.setService.append(element, bitRep, this.universeMap).subscribe({
        next: (response) => {
          bitRep = response;
          currentIndex++;
          appendNext(); // Continue with next element
        },
        error: (err) => {
          console.error('Error appending element:', err);
          alert(`Element "${element}" is not in the universal set!`);
          if (callback) callback();
        }
      });
    };

    appendNext(); // Start the chain
  }

  // Execute operation
  executeOperation() {
    if (!this.isUniverseInitialized) {
      alert('Please initialize the universal set first!');
      return;
    }

    if (!this.selectedOperation) {
      alert('Please select an operation!');
      return;
    }

    // Build bit representations for all subsets sequentially before operation
    let currentSubset = 0;
    const buildNext = () => {
      if (currentSubset >= this.numberOfSubsets) {
        // All subsets built, now perform operation
        this.performOperation();
        return;
      }

      this.buildSubsetBitRepresentation(currentSubset, () => {
        currentSubset++;
        buildNext();
      });
    };

    buildNext();
  }

  private performOperation() {
    switch (this.selectedOperation) {
      case 'union':
        if (this.selectedSet1 === -1 || this.selectedSet2 === -1) {
          alert('Please select two sets!');
          return;
        }
        this.setService.union(
          this.bitRepresentations[this.selectedSet1],
          this.bitRepresentations[this.selectedSet2]
        ).subscribe({
          next: (result) => {
            this.resultBitRepresentation = result;
            this.displayResult();
          },
          error: (err) => console.error('Union error:', err)
        });
        break;

      case 'intersection':
        if (this.selectedSet1 === -1 || this.selectedSet2 === -1) {
          alert('Please select two sets!');
          return;
        }
        this.setService.intersection(
          this.bitRepresentations[this.selectedSet1],
          this.bitRepresentations[this.selectedSet2]
        ).subscribe({
          next: (result) => {
            this.resultBitRepresentation = result;
            this.displayResult();
          },
          error: (err) => console.error('Intersection error:', err)
        });
        break;

      case 'difference':
        if (this.selectedSet1 === -1 || this.selectedSet2 === -1) {
          alert('Please select two sets!');
          return;
        }
        this.setService.difference(
          this.bitRepresentations[this.selectedSet1],
          this.bitRepresentations[this.selectedSet2]
        ).subscribe({
          next: (result) => {
            this.resultBitRepresentation = result;
            this.displayResult();
          },
          error: (err) => console.error('Difference error:', err)
        });
        break;

      case 'complement':
        if (this.selectedSet1 === -1) {
          alert('Please select a set!');
          return;
        }
        this.setService.complement(
          this.bitRepresentations[this.selectedSet1],
          this.universalSet.length
        ).subscribe({
          next: (result) => {
            this.resultBitRepresentation = result;
            this.displayResult();
          },
          error: (err) => console.error('Complement error:', err)
        });
        break;

      case 'cardinality':
        if (this.selectedSet1 === -1) {
          alert('Please select a set!');
          return;
        }
        this.setService.getCardinality(
          this.bitRepresentations[this.selectedSet1],
          this.universalSet.length
        ).subscribe({
          next: (result) => {
            this.operationResult = `Cardinality: ${result}`;
          },
          error: (err) => console.error('Cardinality error:', err)
        });
        break;

      case 'print':
        if (this.selectedSet1 === -1) {
          alert('Please select a set!');
          return;
        }
        this.setService.getElements(
          this.bitRepresentations[this.selectedSet1],
          this.universalSet
        ).subscribe({
          next: (result) => {
            this.operationResult = `Elements: { ${result.join(', ')} }`;
          },
          error: (err) => console.error('Get elements error:', err)
        });
        break;
    }
  }

  private displayResult() {
    // Get elements from bit representation
    this.setService.getElements(this.resultBitRepresentation, this.universalSet).subscribe({
      next: (elements) => {
        this.operationResult = `Result: { ${elements.join(', ')} }`;
      },
      error: (err) => console.error('Display result error:', err)
    });
  }

  // Track elements for subsets
  onSubsetElementChange(subsetIndex: number, elementIndex: number, value: string) {
    if (!this.subsets[subsetIndex]) {
      this.subsets[subsetIndex] = [];
    }
    this.subsets[subsetIndex][elementIndex] = value;
  }
}
