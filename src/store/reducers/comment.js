import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const commentApi = createApi({
    reducerPath: 'comment',
    baseQuery: fetchBaseQuery(),
    tagTypes: ['comments'],
    endpoints: (builder) => ({
        getAllComments: builder.query({
            query: () => `https://school-management-server-seven.vercel.app/comments`,
            providesTags: ['comments']
        }),
        createComment: builder.mutation({
            query: (newComment) => ({
                url: 'https://school-management-server-seven.vercel.app/comments',
                method: 'POST',
                body: newComment
            }),
            invalidatesTags: ['comments']
        }),
        updateComment: builder.mutation({
            query: (editedCmnt) => {
                return{
                    url: `https://school-management-server-seven.vercel.app/comments/${editedCmnt._id}`,
                    method: 'PUT',
                    body: editedCmnt
                }
            },
            invalidatesTags: ['comments']
        }),
        deleteComment: builder.mutation({
            query: (id) => ({
                url: `https://school-management-server-seven.vercel.app/comments/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['comments'],
            transformResponse: (response) => console.log(response)
        })
    })
})

export const {useGetAllCommentsQuery, useCreateCommentMutation, useDeleteCommentMutation, useUpdateCommentMutation} = commentApi