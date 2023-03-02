import ChildComponent from '@/components/ChildComponent.vue';
import { shallowMount } from '@vue/test-utils';

let wrapper = null;
beforeEach(() => {
  wrapper = shallowMount(ChildComponent);
});

describe('ChildComponent Testing', () => {
  test('article 존재 여부', () => {
    expect(wrapper.find('.child-desc').text()).toBe('자식 article');
  });
});
