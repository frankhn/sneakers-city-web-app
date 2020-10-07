import * as React from 'react'
import { mount } from 'enzyme'
import Pagination from '../index'



describe('Render Pagination component', () => {
    test('should render without throwing an error', function () {
        const wrapper = mount(<Pagination
            pages={2}
            page={1}
            total={5}
            handler={() => jest.fn()}
        />);
        expect(wrapper.find('div')).toMatchSnapshot();
    })

})
