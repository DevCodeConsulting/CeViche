import { CONSULTANT_LIST_ACTIONS }                                          from '~/infrastructure/ACTION_TYPES';

const _MOCKED_CONSULTANT_LIST_DATA_ = {
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

}

export function setConsultantListData() {
    return {
        type: CONSULTANT_LIST_ACTIONS.SET_DATA,
        payload: _MOCKED_CONSULTANT_LIST_DATA_
    }
}
