import { combineReducers }                                      from 'redux';
import { routerReducer }                                        from 'react-router-redux';
import consultantsReducer                                       from '../reducers/consultantsReducer';
import consultantReducer                                        from '../reducers/consultantReducer';

export default combineReducers({
    consultantsReducer,
    consultantReducer,
    routing: routerReducer
});
