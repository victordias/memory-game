import { shallowMount } from '@vue/test-utils';
import RoundStats from '@/components/RoundStats.vue';

describe('RoundStats.vue', () => {
  it('renders props.msg when passed', () => {
    const player = 'Victor Oliveira';
    const wrapper = shallowMount(RoundStats, {
      propsData: {
        player,
      },
    });
    console.log(wrapper);
    expect(wrapper.text()).toMatch(player);
  });
});
