import { Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-product-description',
  standalone: true,
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.css'
})
export class ProductDescriptionComponent {

  selectedVersion = input.required<string>();

  expanded = signal(false)

  descriptionImage = computed(() => {

    if (this.selectedVersion() === 'switch') {
      return 'assets/Stardew-Valley.png';
    }

    if (this.selectedVersion() === 'switch2') {
      return 'assets/Stardew-Valley2.png';
    }

    return 'assets/Stardew-Upgrade.png';
  });

  toggleDescription() {
    this.expanded.update(value => !value)
  }
}
