import { combineReducers }                                      from 'redux';
import { routerReducer }                                        from 'react-router-redux';
import consultantsReducer                                       from '../reducers/consultantsReducer';
import resumeReducer                                            from '../reducers/resumeReducer';

export default combineReducers({
    consultantsReducer,
    resumeReducer,
    routing: routerReducer
});
