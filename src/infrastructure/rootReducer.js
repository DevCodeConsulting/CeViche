import { combineReducers }                                      from 'redux';
import { routerReducer }                                        from 'react-router-redux';
import exampleReducer                                           from '../reducers/exampleReducer';
import consultantsReducer                                       from '../reducers/consultantsReducer';


export default combineReducers({
    exampleReducer,
    consultantsReducer,
    routing: routerReducer
});
