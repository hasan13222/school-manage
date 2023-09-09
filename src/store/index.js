import { configureStore, combineReducers} from '@reduxjs/toolkit';
import {commentApi} from './reducers/comment'
import {admissionReducer} from './reducers/admission'
import { onlineCoursesReducer } from './reducers/shop';
import {admissionApi} from './reducers/admission'
import {cartApi} from './reducers/cart'

const rootReducer = combineReducers({
    [commentApi.reducerPath]: commentApi.reducer,
    admission: admissionReducer,
    [admissionApi.reducerPath]: admissionApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    onlineCourse: onlineCoursesReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (gdm) => gdm().concat(commentApi.middleware, admissionApi.middleware, cartApi.middleware
        )
})