import { createSlice } from "@reduxjs/toolkit";
export const eventInfoSlice = createSlice({
    name: 'eventInfo',
    initialState: {
        keyword: '',
        city: '',
        datetime: '',
        category: '',
        sort: ''
    },
    reducers: {
        changeKeyword: (state, action) => { state.keyword = action.payload },
        changeCity: (state, action) => { state.city = action.payload },
        changeDatetime: (state, action) => { state.datetime = action.payload },
        changeCategory: (state, action) => { state.category = action.payload },
        changeSort: (state, action) => { state.sort = action.payload },
    }
});

export const { changeKeyword, changeCity, changeDatetime, changeCategory, changeSort } = eventInfoSlice.actions;
export default eventInfoSlice.reducer;