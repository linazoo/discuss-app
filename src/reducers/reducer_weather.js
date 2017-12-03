import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (actiontype) {
        case FETCH_WEATHER:
        // return state.concat([ action.payload.data ]);
        //OR ES6 SYNTAX - take this and added to that array - return NEW array not the same one
        //not mutating the original array but returning a new one
        return [ action.payload.data, ...state ]; // [ city, city, city ] NOT [ city, [city, city]]
    }
    return state; 
}