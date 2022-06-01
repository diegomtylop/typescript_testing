import {init} from '../shared_data/credentialsHandler'
export const mochaHooks = {
  beforeAll() {
    console.info("Running global hook");
    init();
  },
  beforeEach() {
    console.info("Running before each");
  }
};
