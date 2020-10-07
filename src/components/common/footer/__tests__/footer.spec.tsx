import * as React from 'react'
import { shallow } from 'enzyme'
import Footer from '../index'


describe('Render Footer component', () => {

    test('should render without throwing an error', function () {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('div')).toMatchSnapshot();
    })
})
