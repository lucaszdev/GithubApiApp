import { combineReducers } from "@modules";

import { reducer as reducerRepositories } from './repositories/reducers';

const appReducer = combineReducers({
    reducerRepositories,
});

const rootReducer = (state: any, action: any) => {
    if (action.type === '@CLEAR_REDUCERS') {
        state = null
    }

    return appReducer(state, action);
}

export default rootReducer;

