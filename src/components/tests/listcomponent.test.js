import ListComponent from '@/components/ListComponent.vue';
import { shallowMount } from '@vue/test-utils';

let wrapper = null;

const mockData = [
  {
    Idx: 1,
    ToDoItem: 'css 공부',
    createdAt: '2023-02-01T15:00:00.000Z',
    updatedAt: '2023-02-01T15:00:00.000Z',
  },
  {
    Idx: 2,
    ToDoItem: 'Java 공부',
    createdAt: '2023-02-01T15:00:00.000Z',
    updatedAt: '2023-02-01T15:00:00.000Z',
  },
];

beforeEach(() => {
  wrapper = shallowMount(ListComponent);
});

describe('list component ', () => {
  test('props 확인', async () => {
    await wrapper.setProps({
      list: mockData,
    });
    expect(wrapper.find('.list').exists()).toBeTruthy();
  });
});
