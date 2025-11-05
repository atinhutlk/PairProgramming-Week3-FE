// Step 1: Import Tour component
import Tour from './Tour';

// Step 2: Import images
import tour1 from '../assets/images/tour-1.jpeg';
import tour2 from '../assets/images/tour-2.jpeg';
import tour3 from '../assets/images/tour-3.jpeg';
import tour4 from '../assets/images/tour-4.jpeg';

// Step 3: Paste the tours array here
const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2027',
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    location: 'China',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2027',
    title: 'Best of Java',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    location: 'Indonesia',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2027',
    title: 'Explore Hong Kong',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    location: 'Hong Kong',
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2027',
    title: 'Kenya Highlights',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    location: 'Kenya',
    duration: 20,
    cost: 3300,
  },
];

// Step 4: Define the Tours component
function Tours() {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>
      <div className="section-center featured-center">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} />
        ))}
      </div>
    </section>
  );
}

export default Tours;
