import { createSagaMiddleware } from "@modules";

import createStore from "./createStore";
import rootReducer from './models/rootReducer';
import rootSaga from './models/rootSaga';

// Reactotron
const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

// Middleware Saga
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

// Create Middlewares array
const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);

export { store };
