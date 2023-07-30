const { merge } = require('webpack-merge');
const loadSharedConfig = require('./configs/shared');

const loadModeConfig = env => {
  const modeConfig = require(`./configs/${env.mode}`)(env);
  return modeConfig;
};

module.exports = function (env) {
  // Set the mode explicitly before calling loadSharedConfig and loadModeConfig
  env.mode = env.mode || 'development'; // Default mode to 'development' if not specified
  return merge(loadSharedConfig(env), loadModeConfig(env));
};
