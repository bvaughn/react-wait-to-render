'use strict';
import fs from 'fs';
import path from 'path';

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import Clean from 'clean-webpack-plugin';
import merge from 'webpack-merge';
import React from 'react';
import ReactDOM from 'react-dom/server';
import MTRC from 'markdown-to-react-components';

import App from './demo/App.jsx';
import pkg from './package.json';

const TARGET = process.env.npm_lifecycle_event;
const ROOT_PATH = path.resolve(__dirname);
const config = {
  paths: {
    dist: path.join(ROOT_PATH, 'dist'),
    source: path.join(ROOT_PATH, 'source'),
    demo: path.join(ROOT_PATH, 'demo'),
    tests: path.join(ROOT_PATH, 'tests')
  },
  filename: 'boilerplate',
  library: 'Boilerplate'
};
const CSS_PATHS = [
  config.paths.demo,
  path.join(ROOT_PATH, 'style.css'),
  path.join(ROOT_PATH, 'node_modules/purecss'),
  path.join(ROOT_PATH, 'node_modules/highlight.js/styles/github.css'),
  path.join(ROOT_PATH, 'node_modules/react-ghfork/gh-fork-ribbon.ie.css'),
  path.join(ROOT_PATH, 'node_modules/react-ghfork/gh-fork-ribbon.css')
];

process.env.BABEL_ENV = TARGET;

const demoCommon = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.png', '.jpg'],
    root: ROOT_PATH
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: [
          config.paths.demo,
          config.paths.source
        ]
      }
    ],
    loaders: [
      {
        test: /\.png$/,
        loader: 'url?limit=100000&mimetype=image/png',
        include: config.paths.demo
      },
      {
        test: /\.jpg$/,
        loader: 'file',
        include: config.paths.demo
      },
      {
        test: /\.json$/,
        loader: 'json',
        include: path.join(ROOT_PATH, 'package.json')
      }
    ]
  }
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(demoCommon, {
    devtool: 'eval-source-map',
    entry: config.paths.demo,
    output: {
      path: __dirname,
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development')
        }
      }),
      new HtmlWebpackPlugin({
        title: pkg.name + ' - ' + pkg.description,
        templateContent: renderJSX
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
          include: CSS_PATHS
        },
        {
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: [
            config.paths.demo,
            config.paths.source
          ]
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    }
  });
}

if (TARGET === 'gh-pages' || TARGET === 'deploy-gh-pages') {
  module.exports = merge(demoCommon, {
    entry: {
      app: config.paths.demo,
      vendors: [
        'react'
      ]
    },
    output: {
      path: './gh-pages',
      filename: 'bundle.[chunkhash].js'
    },
    plugins: [
      new Clean(['gh-pages']),
      new ExtractTextPlugin('styles.[chunkhash].css'),
      new webpack.DefinePlugin({
        'process.env': {
          // This has effect on the react lib size
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new HtmlWebpackPlugin({
        title: pkg.name + ' - ' + pkg.description,
        templateContent: renderJSX.bind(null, ReactDOM.renderToString(<App />))
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.[chunkhash].js')
    ],
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css'),
          include: CSS_PATHS
        },
        {
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: [
            config.paths.demo,
            config.paths.source
          ]
        }
      ]
    }
  });
}

if (TARGET === 'test' || TARGET === 'tdd') {
  module.exports = merge(demoCommon, {
    module: {
      preLoaders: [
        {
          test: /\.jsx?$/,
          loaders: ['eslint'],
          include: [
            config.paths.tests
          ]
        }
      ],
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: [
            config.paths.source,
            config.paths.tests
          ]
        }
      ]
    }
  })
}


const distCommon = {
  devtool: 'source-map',
  output: {
    path: config.paths.dist,
    libraryTarget: 'umd',
    library: config.library
  },
  entry: config.paths.source,
  externals: {
    'react': {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'React',
        root: 'React'
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: config.paths.source
      }
    ]
  }
};

if (TARGET === 'dist') {
  module.exports = merge(distCommon, {
    output: {
      filename: config.filename + '.js'
    }
  });
}

if (TARGET === 'dist-min') {
  module.exports = merge(distCommon, {
    output: {
      filename: config.filename + '.min.js'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
}

function renderJSX(demoTemplate, templateParams, compilation) {
  demoTemplate = demoTemplate || '';

  var tpl = fs.readFileSync(path.join(__dirname, 'lib/index_template.tpl'), 'utf8');
  var readme = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8');
  var replacements = {
    name: pkg.name,
    description: pkg.description,
    demo: demoTemplate,
    documentation: ReactDOM.renderToStaticMarkup(
      <div key="documentation">{MTRC(readme).tree}</div>
    )
  };

  return tpl.replace(/%(\w*)%/g, function(match) {
    var key = match.slice(1, -1);

    return replacements[key] ? replacements[key] : match;
  });
}
