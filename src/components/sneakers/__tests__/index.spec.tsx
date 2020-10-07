import * as React from 'react'
import { shallow } from 'enzyme'
import Sneakers from '../index'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'

const mockStore = configureStore([]);

describe('First Rendering the component', () => {
    let store;
    let component: any;
    beforeEach(() => {
        store = mockStore({
            sneakers: {
                sneakers: [],
                meta: {},
                loading: false
            }

        });

        store.dispatch = jest.fn();

        component = shallow(
            <Provider store={store}>
                <Sneakers />
            </Provider>
        )

    });

    it('should render without throwing an error', function () {
        expect(component).toMatchSnapshot()
    })
})