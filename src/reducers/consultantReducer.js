import { RESUME_ACTIONS }                                          from '~/infrastructure/ACTION_TYPES';
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

function mapCompetence(competences) {
    return competences.map(comp => {
        return new competenceReducerRecord(comp);
    })
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RESUME_ACTIONS.SET_DATA: {
            const { competence } = action.payload;

            return state.set("competence", mapCompetence(competence))
        }

        default:
            return state;
    }
};
