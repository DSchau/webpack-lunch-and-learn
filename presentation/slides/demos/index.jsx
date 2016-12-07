import React, { Component } from 'react';
import {
  Appear,
  CodePane,
  Heading,
  List,
  ListItem,
  Link
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

const images = {};

preloader(images);

export const Links = {
  slide() {
    return (
      <div>
        <Heading size={5} fit>
          <Link href="https://github.com/DSchau/webpack-config-assign" textColor="secondary">
            webpack-config-assign
          </Link>
        </Heading>
        <Heading size={6} textColor="white">A utility to make merging environment configs simple</Heading>
      </div>
    );
  }
};

export const ExampleOldConfig = {
  code: require('!!raw!assets/code/webpack.config.old'),
  ranges: [
    { loc: [0, 41], title: 'Turn this...' },
    { loc: [2, 3], title: 'get the env' },
    { loc: [4, 7], title: 'establish a base config' },
    { loc: [8, 9], title: 'Check environment' },
    { loc: [9, 17], title: 'Overrides for environment' },
    { loc: [39, 40], title: 'Export modified config' }
  ]
};

export const ExampleAssignConfig = {
  code: require('!!raw!assets/code/webpack.config.assign'),
  ranges: [
    { loc: [0, 8], title: 'Into this...' },
    { loc: [0, 1], title: 'Get the tool' },
    { loc: [2, 3], title: 'Get the env' },
    { loc: [4, 7], title: 'Merge the configs' }
  ]
};

export const FunctionalityLineItems = {
  slide() {
    return (
      <List>
        <ListItem>Intelligently merge loaders</ListItem>
        <ListItem>concat plugins</ListItem>
        <ListItem>extend existing config</ListItem>
        <ListItem>Works great with separate env.configs</ListItem>
      </List>
    );
  }
};
