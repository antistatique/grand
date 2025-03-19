import EmblaCarousel from 'embla-carousel';

declare global {
  interface Window {
    EmblaCarousel: typeof EmblaCarousel;
  }
}
