import React, { Component } from 'react';
import {
  Appear,
  Code,
  CodePane,
  Fill,
  Heading,
  Image,
  Layout,
  List,
  ListItem
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

import chunk from 'lodash.chunk';

const images = {
  webpackDashboard: require('assets/images/webpack-dashboard.png')
};

preloader(images);

export const Title = {
  slide() {
    return (
      <div>
        <Heading size={1} caps fit>Main Concepts</Heading>
      </div>
    );
  }
};

export const Bundler = {
  notes: 'Think of it as CommonJS/Node modules for the web',
  slide() {
    return (
      <div>
        <Heading size={2} caps>Module bundling</Heading>
      </div>
    );
  }
};

export const DirectoryStructure = {
  code: require('!!raw!assets/directory-structure-simple.txt'),
  ranges: [
    { loc: [0, 3], title: 'A simple project with a few files' },
    { loc: [1, 2] },
    { loc: [2, 3] }
  ]
};

export const BundlerExplanation = {
  slide() {
    return (
      <div>
        <CodePane lang="javascript" textSize="20" margin={20}>{ require('!!raw!assets/code/simple-bundler.common.js') }</CodePane>
        <Appear>
          <CodePane lang="javascript" textSize="20" margin={20}>{ require('!!raw!assets/code/simple-bundler.js') }</CodePane>
        </Appear>
      </div>
    );
  }
};

export const Loaders = {
  notes: [
    'Teaches webpack how to load/interpret files',
    'Allows things like ES6 -> ES5, images, CSS, etc.'
  ],
  slide() {
    return (
      <div>
        <Heading size={2} caps>Loaders</Heading>
      </div>
    );
  }
};

export const SampleLoaderFile = {
  code: require('!!raw!assets/code/loaders.js'),
  ranges: [
    { loc: [0, 13], title: 'Teaching Webpack new syntax' },
    { loc: [0, 2], title: 'CSS' },
    { loc: [3, 4], title: 'SCSS' },
    { loc: [5, 8], title: 'images' },
    { loc: [9, 11], title: 'Typescript/ES6/etc.' },
    { loc: [0, 13], title: 'and more!' }
  ]
};

export const PreLoaders = {
  slide() {
    return (
      <div>
        <Heading size={4} textColor="secondary" caps>Pre loaders</Heading>
      </div>
    );
  }
};

export const PostLoaders = {
  slide() {
    return (
      <div>
        <Heading size={4} textColor="secondary" caps>Post loaders</Heading>
      </div>
    );
  }
};

export const AllLoaders = {
  slide() {
    const length = 5000;
    return (
      <div>
        <Layout>
          {
            chunk(require('!!raw!assets/loaders.txt').split(/,\n*/), 50)
              .map((loaders, loadersIndex) => {
                return (
                  <Fill key={loadersIndex}>
                    <List>
                      {
                        loaders
                          .map((loader, loaderIndex) => {
                            return (
                              <ListItem textSize={20} key={loaderIndex}>{ loader }</ListItem>
                            );
                          })
                      }
                    </List>
                  </Fill>
                );
              })
          }
        </Layout>
      </div>
    );
  }
};

export const UserfulLoaders = {
  slide() {
    const codeBlock = (code) => <Code textColor="white" bgColor="rgba(255, 255, 255, 0.25)">{ code }</Code>;

    return (
      <div>
        <Layout>
          <Fill>
            <List>
              <ListItem>{ codeBlock('babel-loader') }</ListItem>
              <Appear><ListItem>{ codeBlock('css-loader') }</ListItem></Appear>
              <Appear><ListItem>{ codeBlock('style-loader') }</ListItem></Appear>
              <Appear><ListItem>{ codeBlock('html-loader') }</ListItem></Appear>
            </List>
          </Fill>
          <Fill>
            <List>
              <Appear><ListItem>{ codeBlock('raw-loader') }</ListItem></Appear>
              <Appear><ListItem>{ codeBlock('sass-loader') }</ListItem></Appear>
              <Appear><ListItem>{ codeBlock('url-loader') }</ListItem></Appear>
              <Appear><ListItem>{ codeBlock('awesome-typescript-loader') }</ListItem></Appear>
            </List>
          </Fill>
        </Layout>
      </div>
    );
  }
};

export const AnatomyOfALoader = {
  code: require('!!raw!assets/code/loader-example.js'),
  ranges: [
    { loc: [0, 14], title: 'The structure of a loader' },
    { loc: [6, 7], title: 'A test' },
    { loc: [7, 9], title: 'Include/exclude' },
    { loc: [9, 10], title: 'The loaders' }
  ]
};

export const Plugins = {
  notes: [
    'Everything in Webpack is a plugin',
    'Everything that loaders do not do, plugins can/do'
  ],
  slide() {
    return (
      <div>
        <Heading size={2} caps>Plugins</Heading>
      </div>
    );
  }
};

export const DefinePlugin = {
  slide() {
    return (
      <div>
        <Heading size={4} textColor="secondary">DefinePlugin</Heading>
        <Appear>
          <CodePane lang="javascript" textSize={20} margin={10}>{ require('!!raw!assets/code/define-plugin.js')}</CodePane>
        </Appear>
      </div>
    );
  }
};

export const Optimizers = {
  slide() {
    return (
      <div>
        <Heading size={4} textColor="secondary">DedupePlugin</Heading>
        <Appear><Heading size={4} textColor="secondary">UglifyJsPlugin</Heading></Appear>
      </div>
    );
  }
};

export const HtmlWebpackPlugin = {
  slide() {
    return (
      <div>
        <Heading size={4} textColor="secondary">HtmlWebpackPlugin</Heading>
        <Appear>
          <CodePane lang="javascript" textSize={20} margin={10}>{ require('!!raw!assets/code/html-webpack-plugin.js')}</CodePane>
        </Appear>
      </div>
    );
  }
};

export const WebpackDashboardPlugin = {
  bgImage: images.webpackDashboard,
  slide() {
    return (
      <div>
        <Heading size={1} textColor="secondary" fit>webpack-dashboard</Heading>
      </div>
    );
  }
};

export const CodeSplitting = {
  notes: [
    'The process of splitting applications at logical points',
    'For instance, splitting a profile view from a feed'
  ],
  slide() {
    return (
      <div>
        <Heading size={2} caps>Code splitting</Heading>
      </div>
    );
  }
};

export const CodeSplittingExample = {
  code: require('!!raw!assets/code/code-splitting.js'),
  notes: 'This can use `System.import` in Webpack 2',
  ranges: [
    { loc: [0, 13], title: 'Code splitting in action' },
    { loc: [2, 6], title: 'Async require feature' },
    { loc: [6, 13] }
  ]
};
