import { shallow } from 'enzyme';
import { AutocompleteInput, DropdownItem } from './';

describe('AutocompleteInput component', () => {
  it('should render', () => {
    // TODO: add render snapshot test
    const wrapper = shallow(<AutocompleteInput />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('DropdownItem component', () => {
  it('should fire callback when clicked', () => {
    const option = 'testOption';
    const callback = jest.fn();

    const wrapper = shallow(
      <DropdownItem option={option} onSelect={callback} />
    );
    wrapper.find('div.dropdown-item').simulate('click');

    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith(option);
  });
});
