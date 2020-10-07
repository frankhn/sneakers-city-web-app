import * as React from 'react'
import {  shallow } from 'enzyme'
import Header from '../index'



describe('Render Pagination component', () => {
    test('should render without throwing an error', function () {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('div')).toMatchSnapshot();
    })

})
