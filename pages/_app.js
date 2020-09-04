import App from 'next/app'
import { Provider } from 'react-redux'
import widthRedux, { createWrapper } from 'next-redux-wrapper'
import React, { Component } from 'react'
import store from '../redux/store/store'

import { AnimatePresence } from 'framer-motion'

import '../styles/ui.css'
import '../styles/sprite.css'
import '../styles/globals.css'

class MyApp extends App {

    // Random string for Motion AnimatePresence uniq key={id}
    getRandomStr = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        //Anything returned here can be access by the client
        console.log('pageProps', pageProps);
        return {pageProps: pageProps};
    }

    render () {
        const { Component, pageProps } = this.props;
        console.log(store.getState());
        return (
            <Provider store={store}>
                <AnimatePresence exitBeforeEnter>
                    <Component {...pageProps} key={this.getRandomStr()} />
                </AnimatePresence>
            </Provider>
        )
    }
}

const makeStore = () => store;

export default widthRedux(makeStore)(MyApp)
