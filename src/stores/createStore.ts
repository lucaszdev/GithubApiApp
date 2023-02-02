import { createStore, compose, applyMiddleware } from '@modules';

export default (reducers: any, middlewares: any) => {
    const enhancer = process.env.NODE_ENV === 'development'
        ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
        : applyMiddleware(...middlewares);

    return createStore(reducers, enhancer);
}