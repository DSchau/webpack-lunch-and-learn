import React, { Component } from 'react';
import {
  Appear,
  Code,
  CodePane,
  Heading
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';

const images = {};

preloader(images);

export const Title = {
  slide() {
    return (
      <div>
        <Heading size={1} caps fit>best practices</Heading>
        <Heading size={2} caps>(and some cool shit)</Heading>
      </div>
    );
  }
};

export const SplitDevProd = {
  slide() {
    return (
      <div>
        <Heading size={4} textColor="secondary" caps>split config into common/dev/prod</Heading>
        <Heading size={5} textColor="white">(sometimes test!)</Heading>
      </div>
    );
  }
};

export const SetEnvironment = {
  slide() {
    return (
      <div>
        <CodePane lang="json" textSize={20} margin={20}>{ require('!!raw!assets/code/package-scripts.json')}</CodePane>
      </div>
    );
  }
};

export const NpmScriptsProtip = {
  slide() {
    return (
      <div>
        <Heading size={2} textColor="secondary" caps>Pro-tip</Heading>
        <Appear>
          <Heading size={6} textColor="white">npm scripts can be prefixed with <Code textColor="white">pre</Code> or <Code textColor="white">post</Code> to run before or after script</Heading>
        </Appear>
      </div>
    );
  }
};

export const HashBundles = {
  slide() {
    return (
      <div>
        <Heading size={4} textColor="secondary" caps>hash production bundles</Heading>
        <Heading size={6} textColor="secondary">
          <Code textColor="white">bundle.js</Code> to 
          <Code textColor="white">bundle.6c0673000c43e50e1232.js</Code>
        </Heading>
        <Appear>
          <CodePane lang="javascript" textSize={20} margin={20}>{ require('!!raw!assets/code/webpack.config.hashed.js')}</CodePane>
        </Appear>
      </div>
    );
  }
};

export const UglifyContent = {
  slide() {
    return (
      <div>
        <Heading size={4} textColor="secondary" caps>uglify files</Heading>
      </div>
    );
  }
};

export const VendorDepsSplit = {
  slide() {
    return (
      <div>
        <Heading size={4} textColor="secondary" caps>Split vendor deps</Heading>
      </div>
    );
  }
};

export const VendorDepsSplitExample = {
  slide() {
    return (
      <div>
        <CodePane lang="javascript" textSize={20} margin={20}>{ require('!!raw!assets/code/webpack.config.split.js')}</CodePane>
      </div>
    );
  }
};

export const Devtool = {
  slide() {
    return (
      <div>
        <Heading size={4} textColor="secondary" caps>Source maps</Heading>
        <Appear><Heading size={6} textColor="secondary"><Code textColor="white">eval-source-map</Code> or <Code textColor="white">cheap-module-eval-source-map</Code> or <Code textColor="white">eval</Code> for dev</Heading></Appear>
        <Appear><Heading size={6} textColor="secondary"><Code textColor="white">source-map</Code> for prod</Heading></Appear>
      </div>
    );
  }
};

export const AliasingModules = {
  slide() {
    return (
      <div>
        <Heading size={4} textColor="secondary" caps>sometimes modules are not webpack friendly</Heading>
      </div>
    );
  }
};

export const AliasingModuleExample = {
  slide() {
    return (
      <div>
        <CodePane lang="javascript" textSize={20} margin={20}>{ require('!!raw!assets/code/alias-example.js')}</CodePane>
        <Appear><CodePane lang="javascript" textSize={20} margin={20}>{ require('!!raw!assets/code/alias-fix.js')}</CodePane></Appear>
      </div>
    );
  }
};

export const WebDistribution = {
  slide() {
    return (
      <div>
        <Heading size={4} textColor="secondary" caps>U.M.D. for bundled/amd/global compat</Heading>
      </div>
    );
  }
};

export const UmdExample = {
  code: require('!!raw!assets/code/umd-example.js'),
  ranges: [
    { loc: [0, 10] },
    { loc: [1, 3], title: 'CommonJS' },
    { loc: [3, 5], title: 'AMD' },
    { loc: [8, 9], title: 'Global' },
  ]
};

export const CoolShit = {
  slide() {
    return (
      <div>
        <Heading size={2} caps fit>some cool shit</Heading>
      </div>
    );
  }
};

export const ResolveExtensions = {
  slide() {
    return (
      <div>
        <CodePane lang="javascript" margin={10} textSize={20}>{ require('!!raw!assets/code/resolve-extensions') }</CodePane>
      </div>
    );
  }
};

export const ResolveRoot = {
  slide() {
    return (
      <div>
        <CodePane lang="javascript" margin={10} textSize={20}>{ require('!!raw!assets/code/resolve-root') }</CodePane>
      </div>
    );
  }
};

export const ResolveRootExample = {
  code: require('!!raw!assets/code/resolve-root-example.js'),
  ranges: [
    { loc: [0, 1], title: 'Turn this' },
    { loc: [2, 3], title: 'into this' }
  ]
}
