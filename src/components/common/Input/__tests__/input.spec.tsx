import * as React from 'react'
import { shallow } from 'enzyme'
import Input from '../index'



describe('Render Footer component', () => {
    test('should render without throwing an error', function () {
        const wrapper = shallow(<Input elementType="input" />);
        expect(wrapper.find('input')).toMatchSnapshot();
    })

    test('should render without throwing an error', function () {
        const wrapper = shallow(<Input elementType="textarea" />);
        expect(wrapper.find('textarea')).toMatchSnapshot();
    })

    test('should render without throwing an error', function () {
        const wrapper = shallow(<Input elementType="button" />);
        expect(wrapper.find('button')).toMatchSnapshot();
    })

})
