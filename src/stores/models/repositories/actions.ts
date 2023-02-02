import { RepositoriesTypes } from "@interfaces";

export const Types = {
    GET_REPOSITORIES_REQUEST: 'repositories/GET_REPOSITORIES_REQUEST',
    GET_REPOSITORIES_SUCCESS: 'repositories/GET_REPOSITORIES_SUCCESS',
    GET_REPOSITORIES_FAILURE: 'repositories/GET_REPOSITORIES_FAILURE',
};

export function actionGetRepositoriesRequest(query: string) {
    return {
        type: Types.GET_REPOSITORIES_REQUEST,
        payload: {
            query
        }
    }
}

export function actionGetRepositoriesSuccess(data: RepositoriesTypes) {
    return {
        type: Types.GET_REPOSITORIES_SUCCESS,
        payload: {
            data
        }
    }
}

export function actionGetRepositoriesFailure() {
    return {
        type: Types.GET_REPOSITORIES_FAILURE,
    }
}
