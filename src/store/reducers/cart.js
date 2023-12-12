import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const cartApi = createApi({
    reducerPath: 'cart',
    baseQuery: fetchBaseQuery({baseUrl: `https://school-management-server-seven.vercel.app/products`}),
    tagTypes: ['cartProduct'],
    endpoints: (builder) => ({
        getCartProducts: builder.query({
            query: () => ``,
            providesTags: ['cartProduct']
        }),
        addToCart: builder.mutation({
            query: (product) => ({
                url: '/',
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['cartProduct']
        }),
        updateCart: builder.mutation({
            query: (product) => {
                const {id} = product;

                return {
                    url: `/${id}`,
                    method: 'PUT',
                    body: product
                }
            },
            invalidatesTags: ['cartProduct']
        }),
        removeFromProducts: builder.mutation({
            query: (productId) => ({
                url: `/${productId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['cartProduct']
        })
    })
})

export const {useAddToCartMutation, useGetCartProductsQuery, useUpdateCartMutation, useRemoveFromProductsMutation} = cartApi