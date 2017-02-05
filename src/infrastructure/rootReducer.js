import { combineReducers }                                      from 'redux';
import { routerReducer }                                        from 'react-router-redux';
import consultantListReducer                                    from '../reducers/consultantListReducer';
import consultantReducer                                        from '../reducers/consultantReducer';

export default combineReducers({
    consultantListReducer,
    consultantReducer,
    routing: routerReducer
});
