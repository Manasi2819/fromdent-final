import { productReducer, selectedProductReducer } from "./reducers/productReducer";
import { combineReducers } from 'redux'


const rootReducer=combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer
})

export default rootReducer