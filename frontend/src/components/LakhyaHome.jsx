import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home() {
  // ... (your data and functions remain the same)
  const cards = [
    {
      id: 1,
      imageSrc: 'https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/icon-drag.svg',
      title: 'Bridging Talent Horizons',
      description:
        'We bridge the gap between rising talents and developed nations, providing competitive pricing and fostering global careers. Our journey spans from India to the world, exploring the best in Accounts and Finance. Join us in unlocking the true potential of Indian IT excellence.',
    },
    {
      id: 2,
      imageSrc: 'https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/icon-drag.svg',
      title: "India's Skilled Workforce",
      description:
        "India boasts a rich pool of highly skilled professionals, a testament to our exceptional educational infrastructure. At Toriox, we've harnessed this powerful combination of technology and top-tier talent. In a world driven by efficiency and cost-effectiveness, we help you redefine your success story.",
    },
    {
      id: 3,
      imageSrc: 'https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/icon-drag.svg',
      title: 'Partnering for Growth',
      description:
        "At Toriox, we're more than consultants; we're growth partners. We empower companies to sharpen their focus, implement cutting-edge technologies, and optimize operational costs. Join our journey of success, and let's share the risks and rewards together.",
    },
    {
      id: 4,
      imageSrc: 'https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/icon-drag.svg',
      title: 'Building Relationships',
      description:
        "The Toriox family values collaboration. We've had the privilege of serving esteemed clients, and we're eager to support many more. Join hands with us as we build a happier working world together. Your success is our commitment.",
    },
    {
      id: 5,
      imageSrc: 'https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/icon-drag.svg',
      title: 'Cost-Efficiency Solution',
      description:
        "In the global era of intelligent cost management, Toriox offers innovative solutions to lower wage bills and introduce efficient technologies. We're your strategic ally, ensuring your operations are lean and cost-effective, leading to enhanced profitability.",
    },
    {
      id: 6,
      imageSrc: 'https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/icon-drag.svg',
      title: ' Global Reach, Local Excellence',
      description:
        "Toriox is your gateway to global success. Our reach spans the US, UK, Canada, Australia, and beyond, while our commitment to quality remains rooted in India. Trust us to bring the best of both worlds to your business endeavors.",
    },

  ];

const cardsData = [

    {
      id: 2,
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      name: 'Jane Smith',
      rating: 4,
      imageSrc: 'https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/icon-drag.svg',
    },
  ];

const [selectedOption, setSelectedOption] = useState('option1');

const options = [
    { id: 'option1', text: 'grow your email list', color: 'white' },
    { id: 'option2', text: 'Capture more leads', color: 'white' },
    { id: 'option3', text: 'Increase sales conversion', color: 'white' },

  ];

  const handleClick = (divId) => {
    if (selectedOption === divId) {
        // If the same div is clicked again, reset the selection
        setSelectedOption(null);
      } else {
        setSelectedOption(divId);
      }
    };
    const images = [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      // Add more image URLs as needed
    ];

  return (
    <section>
      <div className='text-center'>
        <FaGoogle className='m-3 mt-20 text-6xl mx-auto'></FaGoogle>
        <h1 className='my-6 font-black text-4xl lg:text-6xl'>Easy and powerful to drive huge results</h1>
        <p className='my-6 text-xl lg:text-2xl w-4/5 lg:w-3/5 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
        <div className='text-blue-400 my-6 mx-auto'><a href="">See our proven 3-step process</a></div>
      </div>
      
      <div className='bg-white my-20 rounded-lg mx-auto'>
      <div className='flex w-full justify-evenly text-center'>
            {options.map((option) => (
                <div
                id={option.id}
                onClick={() => handleClick(option.id)}
                className={`w-full p-5 rounded-t-lg border-y border border-white cursor-pointer ${ selectedOption === option.id ? 'bg-white' : 'bg-slate-200'} hover:bg-white h-auto text-xl border-black`}
                >
                <h1>{option.text}</h1>
                </div>
            ))}
        </div>
    
        
      </div>

      <div className="flex flex-col lg:flex-row justify-evenly mx-4 lg:mx-40">
        {/* Sample Content: Replace with your own */}
        <div className="lg:w-1/2 mx-7">
          <h2 className="text-xl">Global Workforce Solutions</h2>
          <p className="ha">Unlock Prosperity: Toriox is more than an idea; it's a global vision. We facilitate wealth creation by connecting rising talents worldwide with developed nations, offering cost-effective solutions. Our journey extends from India to the shores of the US, UK, Canada, Australia, and beyond. We're dedicated to understanding the Indian IT narrative and tapping into the best talent pools in Accounts and Finance.</p>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-xl">Technology and Quality Workforce</h2>
          <p className="ha">India's Finest: India's exceptional educational infrastructure has nurtured a highly skilled workforce. Toriox champions the fusion of technology and quality personnel, proving the potential of India's capabilities on the global stage. As the world seeks smarter solutions to reduce costs and enhance efficiency, we empower companies to achieve their goals and share risks with partner firms.</p>
        </div>

      </div>

      <div className='m-10'>
        {/* Sample Content: Replace with your own */}
        <h1 className='my-5 font-black text-4xl lg:text-6xl text-center'>Empowering Global Success</h1>
        {/* <p className='my-5 text-xl lg:text-2xl w-4/5 lg:w-3/5 mx-auto text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8 mx-4 lg:mx-40">
        {/* Sample Content: Replace with your own */}
        {cards.map((card) => (
          <div key={card.id} className="bg-white rounded-lg p-4">
            <img
              src={card.imageSrc}
              alt={`Card ${card.id}`}
              className="w-20 mx-auto h-20 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{card.title}</h2>
            <p className="text-gray-600 mt-2">{card.description}</p>
          </div>
        ))}
      </div>

      <div className='m-10 my-10'>
        {/* Sample Content: Replace with your own */}
        <h1 className='my-5 font-black text-4xl lg:text-6xl text-center'>Section Title</h1>
        <p className='my-5 text-xl lg:text-2xl w-4/5 lg:w-3/5 mx-auto text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly mx-4 lg:mx-40 my-8">
        {/* Sample Content: Replace with your own */}
        <div className=''>
          <h1 className='my-6 font-black w-4/5 mx-auto text-3xl'>Feature Title 1</h1>
          <p className='my-6 w-4/5 mx-auto'>Feature details 1...</p>
          {/* ... (more content here) */}
        </div>
        <div className='w-full'>
          <img className='mx-auto my-auto h-auto' src="https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/img03.png" alt="" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly mx-4 lg:mx-40 my-8">
        {/* Sample Content: Replace with your own */}
        <div className='w-full'>
          <img className='mx-auto my-auto h-auto' src="https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/img04.png" alt="" />
        </div>
        <div className=''>
          <h1 className='my-6 font-black w-4/5 mx-auto text-3xl'>Feature Title 2</h1>
          <p className='my-6 w-4/5 mx-auto'>Feature details 2...</p>
          {/* ... (more content here) */}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly mx-4 lg:mx-40 my-8">
        {/* Sample Content: Replace with your own */}
        <div className=''>
          <h1 className='my-6 font-black w-4/5 mx-auto text-3xl'>Feature Title 3</h1>
          <p className='my-6 w-4/5 mx-auto'>Feature details 3...</p>
          {/* ... (more content here) */}
        </div>
        <div className='w-full'>
          <img className='mx-auto my-auto h-auto' src="https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/img06.png" alt="" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly mx-4 lg:mx-40 my-8">
        {/* Sample Content: Replace with your own */}
        <div className='w-full'>
          <img className='mx-auto my-auto h-auto' src="https://optinmonster.com/wp-content/themes/optinmonster-theme/assets/sept-2019-landing/images/img07.png" alt="" />
        </div>
        <div className=''>
          <h1 className='my-6 font-black w-4/5 mx-auto text-3xl'>Feature Title 4</h1>
          <p className='my-6 w-4/5 mx-auto'>Feature details 4...</p>
          {/* ... (more content here) */}
        </div>
      </div>

      <div className='m-10'>
        {/* Sample Content: Replace with your own */}
       
      </div>

      <div className='my-18'>
        {/* Sample Content: Replace with your own */}
        <div className="bg-blue-500 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-semibold">Get Started Today!</h2>
          <p className="text-xl mt-4">Join our community and start optimizing your conversions.</p>
          <button className="bg-white text-blue-500 font-semibold px-6 py-2 rounded-full mt-6"><a href="/register">Sign Up</a>
          </button>
        </div>
      </div>

      <div className='m-10'>
        {/* Sample Content: Replace with your own */}
        
      </div>

      <div className='flex justify-evenly mx-4 lg:mx-72'>
        {/* Sample Content: Replace with your own */}
        <div className='text-center'>
          <div>    <h2 className='text-3xl font-semibold'>Testimonials</h2></div>
      
          <p className='text-xl mt-4'>See what our customers are saying...
          </p>
        </div>
     
    </section>
  )
}

export default Home;
