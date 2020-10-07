import * as React from 'react'
import { shallow } from 'enzyme'
import Button from '../index'



describe('Render Footer component', () => {
    test('should render without throwing an error', function () {
        const wrapper = shallow(<Button value="any" />);
        expect(wrapper.find('div')).toMatchSnapshot();
    })
})
