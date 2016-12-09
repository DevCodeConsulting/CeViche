import { combineReducers }                                      from 'redux';
import { routerReducer }                                        from 'react-router-redux';
import exampleReducer                                           from '../reducers/exampleReducer';


export default combineReducers({
    exampleReducer,

    routing: routerReducer
});
