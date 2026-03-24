import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [CommonModule],
  templateUrl: './category.html',
  styleUrl: './category.scss',
})
export class Category {
categories = [
  {
    name: 'Threaded Rod',
    icon: '📏',
    description: 'Precision threaded rods for industrial use'
  },
  {
    name: 'Stud Bolts',
    icon: '🔩',
    description: 'High strength stud bolts for heavy applications'
  },
  {
    name: 'Hex Nuts',
    icon: '⬢',
    description: 'Durable hex nuts with perfect threading'
  },
  {
    name: 'Washers',
    icon: '🔘',
    description: 'Reliable washers for load distribution'
  },
  {
    name: 'Anchor Bolts',
    icon: '⚓',
    description: 'Strong anchoring solutions for structures'
  }
];
}
