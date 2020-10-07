import * as React from 'react'
import { shallow } from 'enzyme'
import Sneaker from '../index'

describe('First Rendering the component', () => {
    const props = {
        id: '1',
        model: '',
        picture: '',
        price: 323,
        brand: '',
        realese: new Date()
    }

    it('should render without throwing an error', function () {
        const wrapper = shallow(<Sneaker  {...props} />);
        expect(wrapper).toMatchSnapshot()
    })
})
