import React, { Fragment } from 'react';
import App from 'next/app';
import withReduxSaga from 'next-redux-saga';
import 'bootstrap/dist/css/bootstrap.min.css';

// #region Local imports
import makeStore from '@Redux';

interface IProps {
    Component: React.Component;
}

class WebApp extends App<IProps> {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Fragment>
                <Component {...pageProps} />
            </Fragment>
        );
    }
}

export default
    makeStore.withRedux(
        withReduxSaga(
            WebApp,
        ),
    );
