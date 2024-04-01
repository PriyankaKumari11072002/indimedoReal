import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
	name: 'search',
	initialState: {searchTerm1: '' ,queryResults:[]},
	reducers: {
		setSearchTerm1: (state, action) => {
			state.searchTerm1 = action.payload;
		},
    setQueryResults:(state,action)=>{
      state.queryResults = action.payload;
    }
		
	},
});1

export const { setSearchTerm1,setQueryResults } = searchSlice.actions;
export default searchSlice.reducer;

// searchSlice.js
// searchSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const searchSlice = createSlice({
//   name: 'search',
//   initialState: {
//     searchTerm: '',
//     suggestions: [],
//     selectedQuery: null,
//     searchData: null,
//     error: null,
//   },
//   reducers: {
//     setSearchTerm: (state, action) => {
//       state.searchTerm = action.payload;
//     },
//     setSuggestions: (state, action) => {
//       state.suggestions = action.payload;
//     },
//     setSelectedQuery: (state, action) => {
//       state.selectedQuery = action.payload;
//     },
//     setSearchData: (state, action) => {
//       state.searchData = action.payload;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//   },
// });

// export const {
//   setSearchTerm,
//   setSuggestions,
//   setSelectedQuery,
//   setSearchData,
//   setError,
// } = searchSlice.actions;

// export const selectSearchTerm = state => state.search.searchTerm;
// export const selectSuggestions = state => state.search.suggestions;
// export const selectSelectedQuery = state => state.search.selectedQuery;
// export const selectSearchData = state => state.search.searchData;
// export const selectError = state => state.search.error;

// export default searchSlice.reducer;

