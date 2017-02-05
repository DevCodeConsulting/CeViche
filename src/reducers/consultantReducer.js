import { RESUME_ACTIONS }                                       from '~/infrastructure/ACTION_TYPES';
import Immutable                                                from 'immutable';

const personReducerRecord = Immutable.Record({
		name : null,
		dateOfBirth : null,
		summary : null,
		branch : []  //vilken bransch man är verksam i
    }),
    competenceReducerRecord = Immutable.Record({
        name : null,
        skillevel : null,
        category: null
    }),
    employerReducerRecord = Immutable.Record({
        name : null,
        branch : null,
        technique: null
    }),
    resumeReducerRecord = Immutable.Record({
        person: new personReducerRecord(),
        competence: [], //each item should be a competenceReducerRecord
        education: [],    //each item should be a educationReducerRecord
        employers: []  //each item should be a employerReducerRecord
    }),
    initialState = new resumeReducerRecord();

function mapToRecord(properties, record) {
    return properties.map(prop => {
        return new record(prop);
    })
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RESUME_ACTIONS.SET_DATA: {
            const { person, competence, education, employers } = action.payload;

            return state
                .set("competence", mapToRecord(competence, competenceReducerRecord))
                .set("person", new personReducerRecord(person))
        }

        default:
            return state;
    }
};
