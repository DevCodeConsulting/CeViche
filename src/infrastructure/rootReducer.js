import { combineReducers }                                      from 'redux';
import { routerReducer }                                        from 'react-router-redux';
import consultantListReducer                                       from '../reducers/consultantListReducer';
import resumeReducer                                            from '../reducers/resumeReducer';

export default combineReducers({
    consultantListReducer,
    resumeReducer,
    routing: routerReducer
});
