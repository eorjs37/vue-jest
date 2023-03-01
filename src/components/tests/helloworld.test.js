import { shallowMount } from '@vue/test-utils';
import Helloworld from '@/components/HelloWorld.vue';

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(Helloworld);
});

describe('HelloWorld.vue testing', () => {
  test('mounted helloword vue', async () => {});
});
