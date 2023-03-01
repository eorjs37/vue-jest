import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import router from '@/router/index';

let wrapper = null;

beforeEach(() => {
  wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });
});

describe('app.vue test', () => {
  test('should ', async () => {
    expect(1).toBe(1);
  });
});
