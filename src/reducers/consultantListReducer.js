import { EXAMPLE_ACTIONS }                                      from '~/infrastructure/ACTION_TYPES';
import Immutable                                                from 'immutable';

const consultantListReducerRecord = Immutable.Record({
        consultants: [] // each item should be a consultantReducerRecord
    }),
    consultantReducerRecord = Immutable.Record({
        name: null,
        title: null,
        currentContract: {
            name: null,
            ends: null
        }                
    }),
    initialState = new consultantListReducerRecord();

//TODO - Martin Blodau: Continue here. Add action and function for connecting the data to the state

export default (state = initialState, action) => {
    switch (action.type) {
        case EXAMPLE_ACTIONS.EXAMPLE: {
            return state.set("example", action.bool);
        }

        default:
            return state;
    }
};
