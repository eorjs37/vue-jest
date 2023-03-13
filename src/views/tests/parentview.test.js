import ParentView from '@/views/ParentView.vue';
import RenderComponent from '@/components/RenderComponent.vue';
import { mount } from '@vue/test-utils';

let wrapper = null;

beforeEach(() => {
  wrapper = mount(ParentView, {
    global: {
      stubs: {
        RenderComponent: true,
      },
    },
  });
});

describe('ParetnView render', () => {
  test('parente view rendering', async () => {
    //RenderComponent이 렌더링 되는지 확인
    expect(wrapper.findComponent(RenderComponent).exists()).toBe(true);
  });

  test('stubs을 이용한 렌더링', async () => {
    expect(wrapper.findComponent(RenderComponent).exists()).toBe(true);
  });
});
