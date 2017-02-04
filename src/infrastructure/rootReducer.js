import { combineReducers }                                      from 'redux';
import { routerReducer }                                        from 'react-router-redux';
import resumeReducer                                            from '../reducers/resumeReducer';


export default combineReducers({
    resumeReducer,

    routing: routerReducer
});
