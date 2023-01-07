import React, { Fragment } from 'react';

// COMPONENTS
import { DesignCard, InfoCard } from '@/components/core';

// JSON DATA
import { designs } from '@/json';

const HomePage = (): JSX.Element => {
  return (
    <Fragment>
      <div className="home-page">
        <header className="home-page__header">
          User experience and interaction designer!
        </header>

        <main className="home-page__main">
          <InfoCard />
          {designs.map((design) => (
            <DesignCard {...design} />
          ))}
        </main>
      </div>
    </Fragment>
  );
};

export { HomePage as default };
