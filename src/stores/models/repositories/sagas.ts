import { api } from '@services/api';
import { call, put, all, takeLatest } from '@modules';
import { Types, actionGetRepositoriesSuccess, actionGetRepositoriesFailure } from './actions';

function* getRepositories({ payload: { query } }: any): any {
    try {
        const response = yield call(api.get, '/search/repositories', {
            params: { q: query }
        });

        yield put(actionGetRepositoriesSuccess(response.data));
    } catch (error) {
        yield put(actionGetRepositoriesFailure())
        console.tron.log(error)
    }
}

export default all([
    takeLatest(Types.GET_REPOSITORIES_REQUEST, getRepositories),
])
