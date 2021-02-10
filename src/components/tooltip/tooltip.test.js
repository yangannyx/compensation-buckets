import { shallow } from 'enzyme';
import { Tooltip } from './';

describe('Tooltip', () => {
  it('should mount', () => {
    const wrapper = shallow(<Tooltip title="Sample Tooltip" info="yoyoyo" link="someLink" />);
    expect(wrapper).toMatchSnapshot();
  });
});
