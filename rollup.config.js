/* eslint-disable import/no-extraneous-dependencies */
import merge from 'deepmerge';
import copy from 'rollup-plugin-copy'; // Import the copy plugin
import { createSpaConfig } from '@open-wc/building-rollup';

// Base SPA config
const baseConfig = createSpaConfig({
  developmentMode: process.env.ROLLUP_WATCH === 'true',
  injectServiceWorker: false,
});

export default merge(baseConfig, {
  input: './index.html',

  plugins: [
    // Add the copy plugin to copy assets from src/assets to dist/assets
    copy({
      targets: [
        { src: 'assets/*', dest: 'dist/assets' }, // This copies all files in src/assets to dist/assets
      ],
    }),
  ],
});
