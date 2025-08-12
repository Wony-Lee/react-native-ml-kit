const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');
const fs = require('fs');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '..');

// Get all local packages
const packages = [
  'barcode-scanning',
  'face-detection',
  'identify-languages',
  'image-labeling',
  'text-recognition',
  'translate-text',
];

const extraNodeModules = {};
packages.forEach(pkg => {
  const packagePath = path.resolve(workspaceRoot, pkg);
  extraNodeModules[`@react-native-ml-kit/${pkg}`] = packagePath;
});

/**
 * Metro configuration for monorepo
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  watchFolders: [workspaceRoot],
  resolver: {
    unstable_enableSymlinks: true,
    unstable_enablePackageExports: true,
    nodeModulesPaths: [
      path.resolve(projectRoot, 'node_modules'),
      path.resolve(workspaceRoot, 'node_modules'),
    ],
    extraNodeModules: {
      ...extraNodeModules,
      // Make sure React Native modules are resolved from the example's node_modules
      'react-native': path.resolve(projectRoot, 'node_modules/react-native'),
      'react': path.resolve(projectRoot, 'node_modules/react'),
      'react-native-reanimated': path.resolve(projectRoot, 'node_modules/react-native-reanimated'),
    },
    // Blocklist test files and fixtures
    blockList: [
      /.*\/__tests__\/.*/,
      /.*\/__(mocks|fixtures)__\/.*/,
      /.*\.test\.(js|jsx|ts|tsx)$/,
      // Block example folders in the workspace packages
      ...packages.map(pkg => new RegExp(`${workspaceRoot}/${pkg}/example/.*`)),
    ],
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  // Cache configuration
  cacheVersion: '1.0',
  resetCache: false,
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);