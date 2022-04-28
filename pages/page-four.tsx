import React from 'react';
import Scroller from '../components/scroller';
import Carousel from '../components/Carousel/Carousel';

export default function Carousels() {
  return (
    <Scroller>
    <div>
      <Carousel
        show={1}
        infiniteLoop
        withIndicator
      >
      <h2 data-testid="carousel-item-1"><img src="https://wallpapercave.com/wp/wp7333471.jpg" alt="placeholder" /></h2>
      <h2 data-testid="carousel-item-2"><img src="https://wallpapercave.com/wp/wp7333475.jpg" alt="placeholder" /></h2>
      <h2 data-testid="carousel-item-3"><img src="https://wallpapercave.com/wp/wp3252821.jpg" alt="placeholder" /></h2>
      <h2 data-testid="carousel-item-1"><img src="https://wallpapercave.com/wp/wp5296530.jpg" alt="placeholder" /></h2>
      <h2 data-testid="carousel-item-2"><img src="https://wallpapercave.com/wp/wp7333475.jpg" alt="placeholder" /></h2>
      <h2 data-testid="carousel-item-3"><img src="https://wallpapercave.com/wp/wp3252821.jpg" alt="placeholder" /></h2>
      <h2 data-testid="carousel-item-1"><img src="https://wallpapercave.com/wp/wp5296530.jpg" alt="placeholder" /></h2>
      <h2 data-testid="carousel-item-2"><img src="https://wallpapercave.com/wp/wp7333475.jpg" alt="placeholder" /></h2>
      <h2 data-testid="carousel-item-3"><img src="https://wallpapercave.com/wp/wp3252821.jpg" alt="placeholder" /></h2>
      <h2 data-testid="carousel-item-1"><img src="https://wallpapercave.com/wp/wp5296530.jpg" alt="placeholder" /></h2>
      <h2 data-testid="carousel-item-2"><img src="https://wallpapercave.com/wp/wp7333475.jpg" alt="placeholder" /></h2>
      <h2 data-testid="carousel-item-3"><img src="https://wallpapercave.com/wp/wp3252821.jpg" alt="placeholder" /></h2>
      <h2 data-testid="carousel-item-1"><img src="https://wallpapercave.com/wp/wp5296530.jpg" alt="placeholder" /></h2>
      <h2 data-testid="carousel-item-2"><img src="https://wallpapercave.com/wp/wp7333475.jpg" alt="placeholder" /></h2>
      <h2 data-testid="carousel-item-3"><img src="https://wallpapercave.com/wp/wp3252821.jpg" alt="placeholder" /></h2>
      </Carousel>
    </div>
    </Scroller>
  );
}
