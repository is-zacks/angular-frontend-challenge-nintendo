import { Component, signal, computed, input, output} from '@angular/core';

@Component({
  selector: 'app-product-hero',
  standalone: true,
  imports: [],
  templateUrl: './product-hero.component.html',
  styleUrl: './product-hero.component.css'
})
export class ProductHeroComponent {

  selectedVersion = input.required<string>();

  versionChange = output<string>();

  currentImage = signal(0)


  title = computed(()=>{
    if (this.selectedVersion() === 'switch') {
      return 'Stardew Valley'
    }

    if (this.selectedVersion() === 'switch2') {
      return 'Stardew Valley: Nintendo Switch 2'
    }

    return 'Stardew Valley: Nintendo Switch 2 Edition Upgrade Pack'
  })


  price = computed (()=>{
    if ( this.selectedVersion() === 'upgrade' ){
    return ('0.00')
  } return 14.99
  })

  images = [
    'assets/2-Carrusel.png',
    'assets/3-Carrusel.png',
    'assets/4-Carrusel.png',
    'assets/5-Carrusel.png',
    'assets/6-Carrusel.png',
    'assets/7-Carrusel.png',
  ]

  selectedImage = signal('assets/Stardew-Valley.png')

  versionThumbnail = computed(() => {

  if (this.selectedVersion() === 'switch') {
    return 'assets/Stardew-Valley.png'
  }

  if (this.selectedVersion() === 'switch2') {
    return 'assets/Stardew-Valley2.png'
  }

  return 'assets/Stardew-Upgrade.png'
})
  redButton = computed (()=>{
    if ( this.selectedVersion() === 'upgrade'){
      return ('Free Download')
    }return ('Direct Download')
  })

  backgroundColor = computed (()=>{

    if(this.selectedVersion() === 'switch'){

      return 'bg-[#d6f0fa]'

    }
    if (this.selectedVersion() === 'switch2'){
      return 'bg-[#0a2d6c]'
    }
    return 'bg-[#0358a9]'
  })

  sectionHeight = computed (()=>{

    if(this.selectedVersion() === 'upgrade'){
      return 'h-280'
    }return 'h-180'


  })

  nextImage() {

  let next = this.currentImage() + 1

  if (next >= this.images.length) {
    next = 0
  }

  this.currentImage.set(next)
  this.selectedImage.set(this.images[next])

}

previousImage() {

  let prev = this.currentImage() - 1

  if (prev < 0) {
    prev = this.images.length - 1
  }

  this.currentImage.set(prev)
  this.selectedImage.set(this.images[prev])

}


}
