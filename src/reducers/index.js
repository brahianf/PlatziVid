const reducer = (state, action) => {
    switch (action.type){
        case 'SET_FAVORITE':
            return  {
                ...state,
                originals: [...state.originals, action.payload]
            }
        break;
        default:
            return state;
    }
}

export default reducer;