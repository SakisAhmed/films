import {
    ADD_ITEM,
    DELETE_ITEM
} from "../Constants/actionsTypes";
const initialState = {
    favList:[]
};
export const moviesReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return { ...state, favList: [...state.favList, action.payload] };
        case DELETE_ITEM:
            return {
                ...state,
                favList: state.favList.filter(
                    (id) => id != action.payload
                ),
            };
        default:
            return state; 
    }
};
/*return { ...state, panier: [...state.panier, action.payload] };*/ 