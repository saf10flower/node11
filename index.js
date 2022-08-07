const core = require('@actions/core');
const node11 = require('@node11');

try {
  const args = core.getInput('args');
  node11.exec(args);
} catch (error) {
  core.setFailed(error.message);
}
