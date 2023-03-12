import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import router from '@/router/index';
import AboutView from '../views/AboutView.vue';
let wrapper = null;

beforeEach(() => {
  wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });
});

describe('app.vue test', () => {
  test('about 화면 이동 ', async () => {
    await router.push('/about');

    expect(wrapper.findComponent(AboutView).exists()).toBe(true);
  });
});
