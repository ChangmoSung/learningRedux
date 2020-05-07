import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({count = 0}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

const countReducer = (state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }
}

const store = createStore(countReducer)


store.dispatch(incrementCount())

console.log(store.getState())

store.dispatch(decrementCount())

console.log(store.getState())

store.dispatch(decrementCount({decrementBy: 10}))
console.log(store.getState())


store.dispatch(setCount({count: 500}))
console.log(store.getState())

store.dispatch(resetCount())

console.log(store.getState())






































// import { createStore } from 'redux';

// const incrementCount = ({ incrementBy = 1 } = {}) => ({
//     type: 'INCREMENT',
//     incrementBy
// })

// const decrementCount = ({decrementBy = 1} = {}) => ({
//     type: 'DECREMENT',
//     decrementBy
// })

// const resetCount = () => ({
//     type: 'RESET'
// })

// const setCount = ({ count }) => ({
//     type: 'SET',
//     count
// })

// const countReducer = (state = { count: 0 }, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
//             return {
//                 count: state.count + incrementBy
//             }
//         case 'DECREMENT':
//             const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
//             return {
//                 count: state.count - decrementBy
//             }
//         case 'RESET':
//             return {
//                 count: 0
//             }
//         case 'SET':
//             return {
//                 count: action.count
//             }
//         default:
//             return state;
//     }
// }

// const store = createStore(countReducer)

// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState())
// });

// store.dispatch(incrementCount({ incrementBy: 5 }))

// store.dispatch(incrementCount())

// store.dispatch(resetCount())

// store.dispatch(decrementCount())

// store.dispatch(decrementCount({decrementBy: 10}))

// store.dispatch(setCount({count: 101}))

// const item = ['coffee', '$1.99', '2.49', '2.99'];

// const [product, , medium] = item;
// console.log(`${product} is ${medium}`)


export default store;