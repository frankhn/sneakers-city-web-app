import * as React from 'react'
import { shallow } from 'enzyme'
import Layout from '../index'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'

const mockStore = configureStore([]);

describe('Render Layout component', () => {
    let store;
    let component: any;
    beforeEach(() => {
        store = mockStore({
            layout: {
                title: 'example title',
            },
            sneakers: {
                sneakers: [],
                meta: {},
                loading: false
            }

        });

        store.dispatch = jest.fn();

        component = shallow(
            <Provider store={store}>
                <Layout children={<div></div>} title="some" />
            </Provider>
        )

    });
    test('should render without throwing an error', function () {
        expect(component.find('div')).toMatchSnapshot();
    })

})
