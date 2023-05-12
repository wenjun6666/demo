const initialState = {
    list: [],
}

export default (state = initialState, {
    type,
    payload
}) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (type) {

        case "GET_TABLE":
            newState.list = payload
            return newState
        case "ADD_TABLE":
            newState.list.unshift(payload);
            return newState
        case "DEL_TABLE":
            newState.list.forEach((item, index) => {
                if (item.key === payload) {
                    newState.list.splice(index, 1)
                }
            })
            return newState
        case "EDIT_TABLE":
            newState.list.forEach((item, index) => {
                if (item.key === payload.key) {
                    newState.list[index]=payload;
                }
            })
            return newState
        default:
            return newState
    }
}