import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const commentApi = createApi({
    reducerPath: 'comment',
    baseQuery: fetchBaseQuery(),
    tagTypes: ['comments'],
    endpoints: (builder) => ({
        getAllComments: builder.query({
            query: () => `http://localhost:5000/comments`,
            providesTags: ['comments']
        }),
        createComment: builder.mutation({
            query: (newComment) => ({
                url: 'http://localhost:5000/comments',
                method: 'POST',
                body: newComment
            }),
            invalidatesTags: ['comments']
        }),
        updateComment: builder.mutation({
            query: (editedCmnt) => {
                return{
                    url: `http://localhost:5000/comments/${editedCmnt.id}`,
                    method: 'PUT',
                    body: editedCmnt
                }
            },
            invalidatesTags: ['comments']
        }),
        deleteComment: builder.mutation({
            query: (id) => ({
                url: `http://localhost:5000/comments/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['comments']
        })
    })
})

export const {useGetAllCommentsQuery, useCreateCommentMutation, useDeleteCommentMutation, useUpdateCommentMutation} = commentApi