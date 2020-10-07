import * as React from 'react'
import { mount, shallow } from 'enzyme'
import Cart from '../index'


describe('First Rendering the component', () => {


    test('should render without throwing an error', function () {
        const wrapper = shallow(<Cart />);
        expect(wrapper.find('div')).toMatchSnapshot();
    })
})
