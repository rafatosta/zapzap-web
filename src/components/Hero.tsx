import laptop from '/laptop-art.svg';
import { appName, appDescription } from '../data';
import { Element } from 'react-scroll';
import { Link } from 'react-scroll';
import classNames from 'classnames';
import { memo } from 'react';

function Hero() {
  return (
    <Element name="home">
      <div className="relative h-screen flex flex-col justify-center items-center gap-8 bg-[url('/background.webp')] bg-[#F0F2F5] text-white">
        <div className="absolute inset-0 bg-[#F0F2F5]/90"></div>

        <img src={laptop} className="relative w-64" alt="Laptop logo" />

        <div className="relative flex flex-col items-center w-2/3 gap-4 text-[#202C33]">
          <h1 className="text-5xl lg:text-7xl font-extrabold">{appName}</h1>
          <p className="text-base lg:text-xl text-center md:w-2/3 lg:w-2/5">
            {appDescription}
          </p>
        </div>

        <div className="relative flex gap-6">
          <NavButton to="download" color="green" label="Download the app">
            Get Started
          </NavButton>
          <NavButton to="features" color="gray" label="Learn more about the app">
            Learn More
          </NavButton>
        </div>

        <div className="absolute inset-x-0 bottom-12 flex justify-center">
          <NavButton
            to="donate"
            color="gray"
            extraClasses="border border-green-600 motion-safe:animate-bounce"
            label="Donate to the project"
          >
            Contribute to the project
          </NavButton>
        </div>
      </div>
    </Element>
  );
}

interface NavButtonProps {
  to: string;
  color: 'green' | 'gray';
  children: React.ReactNode;
  extraClasses?: string;
  label: string; // Acessibilidade melhorada
}

const NavButton: React.FC<NavButtonProps> = memo(({ to, color, children, extraClasses = '', label }) => {
  const buttonClass = classNames(
    `bg-${color}-600 hover:bg-${color}-700 text-[#F0F2F5] text-sm lg:text-md font-semibold rounded-lg p-3`,
    extraClasses
  );

  return (
    <Link to={to} smooth={true} duration={500} role="button">
      <button className={buttonClass} aria-label={label}>
        {children}
      </button>
    </Link>
  );
});

export default Hero;
