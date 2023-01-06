import React, { Fragment } from 'react';

// COMPONENTS
import { DesignCard, InfoCard } from '@/components/core';

const HomePage = (): JSX.Element => {
  return (
    <Fragment>
      <div className="home-page">
        <header className="home-page__header">
          User experience and interaction designer!
        </header>

        <main className="home-page__main">
          <InfoCard />
          <DesignCard backgroundColor="#c773ff" />
          <DesignCard backgroundColor="#876dfc" />
          <DesignCard backgroundColor="#fc5353" />
          <DesignCard backgroundColor="#77d7d9" />
        </main>
      </div>
    </Fragment>
  );
};

export { HomePage as default };
