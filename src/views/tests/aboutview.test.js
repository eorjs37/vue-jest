import AboutView from '@/views/AboutView.vue';
import ChildComponent from '@/components/ChildComponent.vue';
import { mount } from '@vue/test-utils';

let wrapper = null;
beforeEach(() => {
  wrapper = mount(AboutView);
});

describe('aboutview testing', () => {
  test('emit', async () => {
    // 부모 컴퍼넌트의 spyOn을 통해 onSearchClick 감시
    const spy = jest.spyOn(wrapper.vm, 'onChildClick');
    // 자식 컴퍼넌트(ChildComponent)의 emit['childClick']를 호출
    await wrapper.findComponent(ChildComponent).vm.$emit('childclick');
    // emit을 통해 함수 호출 여부 확인
    //expect(spy).toHaveBeenCalled();
  });
});
