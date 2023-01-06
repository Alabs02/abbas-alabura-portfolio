import React, { Fragment } from 'react';

// COMPONENTS
import { DesignCard, InfoCard } from '@/components/core';

const HomePage = (): JSX.Element => {
  const designs = [
    {
      title: 'Mees Palace',
      description: 'Easy-to-use platform for discovering and booking movie tickets, with showtimes, reviews, and trailers all in one place',
      image: '/static/images/mees-palace-thumbnail.svg',
      backgroundColor: '#40CBFD',
      figma_url: 'https://bit.ly/3vH9uWb',
      behance_url: 'https://bit.ly/3vH9uWb'
    },
    {
      title: 'Pizza Club',
      description: 'A social platform for organizing and scheduling pizza parties with friends and colleagues, featuring customizable group orders, payment integration, and real-time event updates',
      image: '/static/images/pizza-club-thumbnail.svg',
      backgroundColor: '#FFCF24',
      figma_url: 'https://bit.ly/3igZtMp',
      behance_url: 'https://www.behance.net/gallery/160455353/Pizza-Club'
    },
    {
      title: 'Ride Online',
      description: 'A platform for booking and paying for on-demand transportation services, including rides in traditional cars, electric vehicles, and carpools, with features like real-time tracking, ratings, and loyalty rewards',
      image: '/static/images/ride-online-thumbnail.svg',
      backgroundColor: '#042C64',
      figma_url: '_',
      behance_url: 'https://www.behance.net/gallery/158997531/Ride-Online'
    },
    {
      title: 'Deem Invest',
      description: 'A financial service that allows users to research, track, and manage their investments in a variety of asset classes, including stocks, bonds, mutual funds, and exchange-traded funds, through a customizable and user-friendly online interface',
      image: '/static/images/deem-invest.svg',
      backgroundColor: '#792340',
      figma_url: 'https://bit.ly/3VUzzvw',
      behance_url: '_'
    }
  ];

  return (
    <Fragment>
      <div className="home-page">
        <header className="home-page__header">
          User experience and interaction designer!
        </header>

        <main className="home-page__main">
          <InfoCard />
          {
            designs.map((design) => (
              <DesignCard { ...design } />
            ))
          }
        </main>
      </div>
    </Fragment>
  );
};

export { HomePage as default };
