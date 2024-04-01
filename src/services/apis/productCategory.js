
import { PRODUCT } from '../../utils/apiRoutes/product';
import { apiSlice } from './apiSlice';

export const productApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({

		trendingToday: builder.query({
			query: () => ({
				headers: {
					'Content-type': 'application/json',
				},
				url: `trendingTodayProduct`,
				method: 'GET',
			}),
		}),

        personalCare: builder.query({
			query: () => ({
				headers: {
					'Content-type': 'application/json',
				},
				url: `/personalCare`,
				method: 'GET',
			}),
		}),


	skinCare: builder.query({
			query: () => ({
				headers: {
					'Content-type': 'application/json',
				},
				url: `/skinCare`,
				method: 'GET',
			}),
		}),
	
	hairCare: builder.query({
			query: () => ({
				headers: {
					'Content-type': 'application/json',
				},
				url: `/hairCare`,
				method: 'GET',
			}),
		}),
	

		
		
		
	}),
});

export const {useTrendingTodayQuery,useSkinCareQuery,useHairCareQuery,useLazyPersonalCareQuery} = productApi
