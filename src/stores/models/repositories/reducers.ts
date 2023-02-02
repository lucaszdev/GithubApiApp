import { RepositoriesTypes } from "@interfaces";
import { Types } from "./actions";

const initialState = {
    items: [],
    loading: false
};

type ActionType = {
    type: any;
    payload: {
        data: {
            items: RepositoriesTypes
        };
    };
};

const reducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case Types.GET_REPOSITORIES_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case Types.GET_REPOSITORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.data.items
            }

        case Types.GET_REPOSITORIES_FAILURE:
            return {
                ...state,
                loading: false,
            }

        default:
            return state;
    }
}

export { reducer };
