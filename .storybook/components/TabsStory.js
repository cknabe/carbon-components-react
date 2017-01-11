import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Tabs from '../../components/Tabs';
import Tab from '../../components/Tab';

const props = {
  tabs: {
    className: 'some-class',
    triggerHref: '#anotherAnchor',
  },
  tab: {
    className: 'another-class',
    onClick: action('onClick'),
    onKeyDown: action('onKeyDown'),
  },
};

storiesOf('Tabs', module)
  .addWithInfo(
    '',
    `
      Tabs are used to quickly navigate between views within the same context. Create individual
      Tab components for each item in the Tabs list.
    `,
    () => (
      <Tabs {...props.tabs}>
        <Tab {...props.tab} label="Overview">
          <div className="some-content">Overview Content</div>
        </Tab>
        <Tab {...props.tab} label="Apple">
          <div className="some-content">Apple Content</div>
        </Tab>
        <Tab {...props.tab} label="Banana">
          <div className="some-content">Banana Content</div>
        </Tab>
        <Tab {...props.tab} label="Orange">
          <div className="some-content">Orange Content</div>
        </Tab>
      </Tabs>
  ));