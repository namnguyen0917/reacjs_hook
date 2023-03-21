

function logger(reducer){

    return (preveState,action) => {

        console.group(action.type)
        console.log('prev sate',preveState)
        console.log('action', action)
        const newState = reducer(preveState,action)
        console.log('next sate',preveState)
        console.groupEnd()
        return newState
    }
}

export default logger;