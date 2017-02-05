import { combineReducers }                                      from 'redux';
import { routerReducer }                                        from 'react-router-redux';
import consultantListReducer                                    from '../reducers/consultantListReducer';
import resumeReducer                                            from '../reducers/resumeReducer';
import consultantReducer                                        from '../reducers/consultantReducer';

export default combineReducers({
    consultantListReducer,
    resumeReducer,
    consultantReducer,
    routing: routerReducer
});
