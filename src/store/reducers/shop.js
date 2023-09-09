import { createSlice } from "@reduxjs/toolkit";
import {onlineCourses} from '../../constants/onlineCourses'

const initialState = onlineCourses;

const oncrsSlice = createSlice({
    initialState: {
        mainData: initialState,
        dataToShow: initialState,
        changeDataByCategory: initialState,
        categoryValue: '',
        freeChecked: false,
        paidChecked: false,
        ratingStar: '',
    },
    name: 'onlineCourses',
    reducers: {
        filterCategory(state, action){
            const filterArray = state.mainData.filter(item => item.category === action.payload)
            return {...state, dataToShow: filterArray, changeDataByCategory: filterArray}
        },
        filterByKeyword(state, action){
            const filterArr = state.dataToShow.filter(item => item.keyword.some(key => key.toLowerCase().includes(action.payload.toLowerCase())))
            return {...state, dataToShow: filterArr}
        },
        filterByPrice(state, action){
            const filterArr = state.dataToShow.filter(item => item.price >= action.payload.min && item.price <= action.payload.max)
            return {...state, dataToShow: filterArr}
        },
        filterByFree(state, action){
            const filterArr = state.dataToShow.filter(item => item.price === 0)
            return {...state, dataToShow: filterArr}
        },
        filterByPaid(state, action){
            const filterArr = state.dataToShow.filter(item => item.price > 0)
            return {...state, dataToShow: filterArr}
        },
        showAll(state, action){
            return {...state, dataToShow: state.mainData}
        },
        filterByRating(state, action){
            const filterArr = state.changeDataByCategory.filter(item => item.rating === action.payload)
            return {...state, dataToShow: filterArr}
        },
        setCategoryValue(state, action){
            return {...state, categoryValue: action.payload}
        },
        setFreeChecked(state, action){
            return {...state, freeChecked: action.payload}
        },
        setPaidChecked(state, action){
            return {...state, paidChecked: action.payload}
        },
        setRatingStar(state, action){
            return {...state, ratingStar: action.payload}
        },
        sortBySales(state, action){
            state.dataToShow.sort((a, b) => b.sales - a.sales);
        },
        sortByRating(state, action){
            console.log('hello');
            state.dataToShow.sort((a, b) => parseInt(b.rating) - parseInt(a.rating));
        },
        sortByDate(state, action){
            state.dataToShow.sort((a, b) => b.date - a.date);
        },
        sortByPriceAsc(state, action){
            state.dataToShow.sort((a, b) => a.price - b.price);
        },
        sortByPriceDsc(state, action){
            state.dataToShow.sort((a, b) => b.price - a.price);
        }
    }
})

export const {filterCategory, setRatingStar, filterByKeyword, filterByPrice, filterByFree, filterByPaid, showAll, filterByRating, setCategoryValue, setFreeChecked, setPaidChecked, sortByDate, sortByPriceAsc, sortByPriceDsc, sortByRating, sortBySales} = oncrsSlice.actions
export const onlineCoursesReducer = oncrsSlice.reducer