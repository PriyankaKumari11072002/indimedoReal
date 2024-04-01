import { USER } from '../../utils/apiRoutes/user';
import { apiSlice } from './apiSlice';

export const userApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		userLogin: builder.mutation({
			query: (data) => ({
				headers: {
					'Content-type': 'application/json',
				},
				url: `${USER}login`,
				method: 'POST',
                body:data
			}),
		}),

        userRegistration: builder.mutation({
			query: (data) => ({
				headers: {
					'Content-type': 'application/json',
				},
				url: `${USER}register`,
				method: 'POST',
                body:data
			}),
		}),
	}),
});

export const { useUserLoginMutation,useUserRegistrationMutation } = userApi
