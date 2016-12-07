import React, { Component } from 'react';
import { Deck, Spectacle } from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

import slidify from './util/slidify';
import slidifyCode from './util/slidify-code';
import { makeSlides } from './util/make-slides';

import * as IntroSlides from './intro/';
import * as WebpackConfigSlides from './webpack-config/';
import * as MainConcepts from './main-concepts/';
import * as WebpackTwoSlides from './webpack-two/';
import * as BestPractices from './best-practices/';
import * as Demos from './demos/';
import * as WrapUp from './wrap-up/';

const theme = createTheme({
  primary: '#000000',
  secondary: '#4FC3F7',
  tertiary: '#E1F5FE',
  quartenary: '#FFFFFF'
});

export class SlideDeck extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck progress="bar" transition={["slide", "fade"]} transitionDuration={500}>
          {
            makeSlides(
              IntroSlides,
              WebpackConfigSlides,
              MainConcepts,
              WebpackTwoSlides,
              BestPractices,
              Demos,
              WrapUp
            )
              .map((slide, index) => slide && slide.code ? slidifyCode(slide, index) : slidify(slide, index))
          }
        </Deck>
      </Spectacle>
    );
  }
}
