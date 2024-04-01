import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {userData: null },
	reducers: {
		setCredentials: (state, action) => {
			state.userData = action.payload;
		},
		logOut: (state, action) => {
			state.token = null;
			state.userData = null;
		},
	},
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.userData;
export const selectCurrentToken = (state) => state.auth.token;
