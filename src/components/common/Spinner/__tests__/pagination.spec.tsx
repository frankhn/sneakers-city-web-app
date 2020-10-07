import * as React from 'react'
import { shallow } from 'enzyme'
import Loader from '../Loader'



describe('Render Footer component', () => {
    test('should render without throwing an error', async () => {
        const wrapper = shallow(<Loader />);
        expect(wrapper.find('div')).toMatchSnapshot();
    })

})
