import { all } from 'redux-saga/effects';

import repositories from './repositories/sagas';

export default function* rootSaga(): any {
    return yield all([
        repositories
    ])
};
