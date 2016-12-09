import { EXAMPLE_ACTIONS }                                      from '~/infrastructure/ACTION_TYPES';
import Immutable                                                from 'immutable';

const exampleReducerRecord = Immutable.Record({
        example: false
    }),
    initialState = new exampleReducerRecord();

export default (state = initialState, action) => {
    switch (action.type) {
        case EXAMPLE_ACTIONS.EXAMPLE: {
            return state.set("example", action.bool);
        }

        default:
            return state;
    }
};
