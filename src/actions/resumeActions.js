import { RESUME_ACTIONS }                                          from '~/infrastructure/ACTION_TYPES';

const _MOCKED_RESUME_DATA_ = {
	"person" : {
		"name" : "Jens Hoffmann Axén",
		"dateOfBirth" : "1968-04-27",
		"summary" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"branch" : ["Finans", "Försäkring"]
	},
	"competence" : [
		{
            name : "Javascript",
            skillevel : "5",
            category : "web development"
        }
	],
	"education" : [
		{"type":"Högskola"},
		{"name":"KTH"},
		{"degree":""}
	],
	"employer" : {
		"name" : "Skandia",
		"branch" : ["Bank","Finans","Försäkring"],
		"teqhinque" : ["Mvc","HTML"]
	},
	"coverLetter":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"revision" : {
	"lastUpdate" : "2017-02-04",
	"updatedBy" : "Jens",
	"created" : "2017-02-04",
	"createdBy" : "Jens"
	}

}

export function setResumeData() {
    return {
        type: RESUME_ACTIONS.SET_DATA,
        payload: _MOCKED_RESUME_DATA_
    }
}
