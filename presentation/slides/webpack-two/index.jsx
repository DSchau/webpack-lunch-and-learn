import React, { Component } from 'react';
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Heading,
  Link,
  Quote
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

const images = {};

preloader(images);

export const Title = {
  slide() {
    return (
      <div>
        <Heading size={1} caps fit>webpack 2</Heading>
      </div>
    );
  }
};

export const TobiasKoppersQuote = {
  bgColor: 'secondary',
  slide() {
    return (
      <div>
        <BlockQuote>
          <Quote textSize={42} style={{ whiteSpace: 'pre-line' }}>{ require('!!raw!assets/quotes/sokra.txt') }</Quote>
          <Cite>
            <Link href="https://github.com/webpack/webpack/issues/1545#issuecomment-264121567" style={{ color: 'white' }}>Tobias Koppers (12/1/2015)</Link>
          </Cite>
        </BlockQuote>
      </div>
    );
  }
};

export const MigrationGuide = {
  slide() {
    return (
      <div>
        <Heading size={1} caps fit textColor="secondary">Minimal work to migrate</Heading>
        <Heading size={5}>
          <Link href="http://javascriptplayground.com/blog/2016/10/moving-to-webpack-2/" textColor="white">Guide</Link>
        </Heading>
      </div>
    );
  }
};

export const TreeShaking = {
  slide() {
    return (
      <div>
        <Heading size={4} textColor="secondary" caps>Tree shaking</Heading>
      </div>
    );
  }
};

export const TreeShakingExplanation = {
  slide() {
    return (
      <div>
        <CodePane lang="javascript" textSize="20" margin={20}>{ require('!!raw!assets/code/tree-shaking-export.js') }</CodePane>
        <Appear>
          <CodePane lang="javascript" textSize="20" margin={20}>{ require('!!raw!assets/code/tree-shaking-import.js') }</CodePane>
        </Appear>
      </div>
    );
  }
};

export const BabelRcTreeShakingConfig = {
  code: require('!!raw!assets/code/.babelrc-tree-shaking'),
  ranges: [
    { loc: [0, 23], title: '.babelrc config' },
    { loc: [4, 7], title: 'allow native import/export' },
    { loc: [11, 14], title: 'commonjs for testing' }
  ]
};

export const CodeSplittingHeader = {
  slide() {
    return (
      <div>
        <Heading size={4} textColor="secondary" caps>System.import split</Heading>
      </div>
    );
  }
};

export const CodeSplittingSystemJSExample = {
  code: require('!!raw!assets/code/code-splitting-system.js'),
  note: 'This requires a Promise polyfill',
  ranges: [
    { loc: [0, 13], title: 'Code splitting with System.js' },
    { loc: [6, 9], note: 'This requires a Promise polyfill' }
  ]
};

export const WebpackCli = {
  slide() {
    return (
      <div>
        <Heading size={2} caps>webpack-cli</Heading>
      </div>
    );
  }
};

export const WebpackCliCodeExample = {
  slide() {
    return (
      <div>
        <CodePane lang="bash" textSize={24}>{ require('!!raw!assets/cli-example.txt') }</CodePane>
      </div>
    );
  }
};

export const WebpackDevServer = {
  slide() {
    return (
      <div>
        <Heading size={4} textColor="secondary" caps>webpack dev server</Heading>
      </div>
    );
  }
};

export const CallToAction = {
  slide() {
    return (
      <div>
        <Heading size={2} caps>use webpack 2</Heading>
      </div>
    );
  }
};
