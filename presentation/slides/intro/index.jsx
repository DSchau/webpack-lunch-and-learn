import React, { Component } from 'react';
import {
  Appear,
  BlockQuote,
  Cite,
  Heading,
  Fill,
  Image,
  Layout,
  List,
  ListItem,
  Quote,
  S
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

const images = {
  webpackLogo: require('assets/images/webpack.svg'),
  competitors: {
    grunt: require('assets/images/grunt-logo.svg'),
    gulp: require('assets/images/gulp.svg'),
    broccoli: require('assets/images/brocolli.png'),
    brunch: require('assets/images/brunch.svg')
  },
  gifs: {
    homer: 'https://thumbs.gfycat.com/SophisticatedBasicKudu-size_restricted.gif',
  }
};

preloader(images);

export const Title = {
  slide() {
    return (
      <div>
        <Image src={images.webpackLogo} width="20%"/>
        <Heading size={1} fit caps>
          Webpack
        </Heading>
        <Heading size={2} fit caps>
          the good parts*
        </Heading>
        <Heading size={8} textColor="white">Dustin Schau</Heading>
      </div>
    );
  }
};

export const BoilerplateQuote = {
  bgColor: 'secondary',
  slide() {
    return (
      <div>
        <BlockQuote>
          <Quote textSize={42}>{ require('!!raw!assets/quotes/gaeron.txt') }</Quote>
          <Cite>Dan Abramov</Cite>
        </BlockQuote>
      </div>
    );
  }
};

export const DocsQuote = {
  bgColor: 'secondary',
  transition: ['zoom'],
  slide() {
    return (
      <div>
        <BlockQuote>
          <Quote textSize={42}>{ require('!!raw!assets/quotes/drumaddict71.txt') }</Quote>
          <Cite>drumaddict71 (webpack docs comment)</Cite>
        </BlockQuote>
      </div>
    );
  }
};

export const Homer = {
  bgImage: images.gifs.homer
};

export const Why = {
  slide() {
    return (
      <div>
        <Heading size={2}>What problem(s!!) does webpack solve?</Heading>
      </div>
    );
  }
};

export const DirectoryStructure = {
  notes: [
    'And how to make this application performant, and not just a single huge JS file'
  ],
  code: require('!!raw!assets/directory-structure.txt'),
  ranges: [
    { loc: [0, 31], title: 'Directory structure' },
    { loc: [0, 4], title: 'main/index files' },
    { loc: [4, 19], title: 'application files' },
    { loc: [8, 9], title: 'JS files' },
    { loc: [10, 19] },
    { loc: [7, 8], title: '... and CSS' },
    { loc: [9, 10], title: '... and images' },
    { loc: [19, 22], title: '... and videos' },
    { loc: [22, 26], title: '... and fonts' },
    { loc: [0, 31], title: 'and so on and so forth' }
  ]
};

export const Competitors = {
  bgColor: 'tertiary',
  slide() {
    const state = {
      strike: false
    };

    return (
      <div>
        <Layout>
          {
            Object.keys(images.competitors)
              .map((key, index) => {
                return (
                  <Fill key={index}>
                    <Appear>
                      <Image src={images.competitors[key]} height="200px"/>
                    </Appear>
                  </Fill>
                );
              })
          }
        </Layout>
      </div>
    );
  }
};

export const What = {
  slide() {
    return (
      <div>
        <Heading size={2}>What can it do?</Heading>
      </div>
    );
  }
};

export const LarkinQuote = {
  bgColor: 'secondary',
  transition: ['zoom'],
  slide() {
    return (
      <div>
        <BlockQuote>
          <Quote>{ require('!!raw!assets/quotes/sean-larkin.txt') }</Quote>
          <Cite>Sean Larkin</Cite>
        </BlockQuote>
      </div>
    );
  }
};

export const Features = {
  slide() {
    return (
      <div>
        <List>
          <ListItem>Bundle disparate files into one file</ListItem>
          <Appear><ListItem>Transpile ES6 to ES5</ListItem></Appear>
          <Appear><ListItem>Split an application at logical points</ListItem></Appear>
          <Appear><ListItem>Bundle an application, and all of its dependencies</ListItem></Appear>
          <Appear><ListItem><S type="strikethrough">... solve world peace?</S></ListItem></Appear>
        </List>
      </div>
    );
  }
};
