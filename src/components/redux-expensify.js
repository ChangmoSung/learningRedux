import { createStore, combineReducers } from 'redux';

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}

const filtersReducerDefaultState = {
    text: 'rent',
    sortBy: 'amout',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState())

const demoState = {
    expenses: [{
        id: 'sdfsdfsd',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amout',
        startDate: undefined,
        endDate: undefined
    }
};

export default store;