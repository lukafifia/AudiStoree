import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone:true,

})
export class HomeComponent {
  slides = [
    {
      image: 'https://pictures.dealer.com/j/jimellisaudimariettaaoa/1235/1413e02d351aa78f8a36e3a984471156x.jpg',
      title: 'e-torque vectoring plus',
      description: 'Instantaneous and electric, e-torque vectoring plus ensures enviable driving dynamics and traction in most driving situations.',
      alt: 'Slide 1'
    },
    {
      image: 'https://i0.wp.com/blog.lauzonaudi.com/wp-content/uploads/2022/07/audi-e-tron-gt-2022-091651508837671.jpg?w=1080&ssl=1',
      title: 'Highly adaptable all-wheel drive',
      description: 'This system intuitively powers each axle individually, making for exceptional traction in nearly all road conditions.',
      alt: 'Slide 2'
    },
    {
      image: 'https://www.topgear.com/sites/default/files/2024/01/16-Audi-RS-e-tron-GT.jpg',
      title: 'Luxury and Performance',
      description: 'The 2023 Audi RS e-tron® GT combines stunning design with cutting-edge technology.',
      alt: 'Slide 3'
    }
  ];

  currentSlide = 0;

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}