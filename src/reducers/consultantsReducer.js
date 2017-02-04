import { EXAMPLE_ACTIONS }                                      from '~/infrastructure/ACTION_TYPES';
import Immutable                                                from 'immutable';

const consultantsReducerRecord = Immutable.Record({
        consultants: [
            {
                name: 'Simon Solders',
                title: 'Frontend developer',
                currentContract: {
                    name: 'Ericsson',
                    ends: '2017-04-01'
                },
                name: 'Fabian Östlund',
                title: 'Frontend developer',
                currentContract: {
                    name: 'Ericsson',
                    ends: '2017-06-15'
                },
                name: 'Martin Blodau',
                title: 'Frontend developer',
                currentContract: {
                    name: 'Ooyala',
                    ends: '2017-09-01'
                },
                name: 'Erik Wallin',
                title: 'System developer',
                currentContract: {
                    name: 'Peas & Understanding',
                    ends: '2018-01-01'
                }                
            }
        ]
    }),
    initialState = new consultantsReducerRecord();

export default (state = initialState, action) => {
    switch (action.type) {
        case EXAMPLE_ACTIONS.EXAMPLE: {
            return state.set("example", action.bool);
        }

        default:
            return state;
    }
};
