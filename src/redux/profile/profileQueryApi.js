import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

let postLength;

export const profileQueryApi = createApi({
    reducerPath: 'profileQueryApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
            prepareHeaders: (headers) => {
                headers.set('API-KEY', 'cedc5812-f528-4e57-b86d-d6fab8633f1f')
                return headers
            },
            credentials: "include",
        }
    ),
    tagTypes: ['ProfileInfo', 'Status', 'Posts'],
    endpoints: (build) => ({
        getProfileInfo: build.query({
            query: (userId) => `/profile/${userId}`,
            providesTags: (result, error, id) => {
                console.log("RESULT", result)
                console.log("error", error)
                console.log("arg", id)
                return [{type: 'ProfileInfo', id: "LIST"}, {type: 'ProfileInfo', id: 123}]
            }

        }),
        editProfileInfo: build.mutation({
            query: (body) => ({
                url: 'profile',
                method: 'PUT',
                body,
            }),
            invalidatesTags: (result, error, arg) => {
                console.log("RESULT2", result)
                console.log("error2", error)
                console.log("arg2", arg)
                return [{type: 'ProfileInfo', id: 123}]
            }
        }),
        getStatus: build.query({
            query: (userId) => `/profile/status/${userId}`,
            providesTags: ['Status'],
        }),
        updateStatus: build.mutation({
            query: (status) => ({
                url: 'profile/status',
                method: 'PUT',
                body: {status},
            }),
            invalidatesTags: ['Status']
        }),
        savePhoto: build.mutation({
            query: (photoFile) => {
                let formData = new FormData()
                formData.append("image", photoFile)
                return {
                    url: '/profile/photo',
                    method: 'PUT',
                    body: formData,
                }
            },
            invalidatesTags: ['ProfileInfo']
        }),
        getPosts: build.query({
            query: () => 'http://localhost:3001/posts',
            providesTags: (result) => {
                postLength = result.length
                return result ?
                    [
                        ...result.map(({id}) => ({type: "Posts", id})),
                        {type: 'Posts', id: 'LIST'}
                    ]
                    : [{type: 'Posts', id: 'LIST'}]
            }

        }),
        addPost: build.mutation({
            query: (newPostText,) => {
                const post = {
                    text: newPostText,
                    like: 0,
                    dislike: 0,
                    id: postLength + 1
                }
                return {
                    url: 'http://localhost:3001/posts',
                    method: 'POST',
                    body: post
                }
            },
            invalidatesTags: ({id}) => {
                console.log(id)
                return [{type: "Posts", id: "LIST"}]
            }
        }),
        removePost: build.mutation({
            query: (id) => ({
                url: `http://localhost:3001/posts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ({id}) => [{type: "Posts", id}]
        })
    })
})

console.log(profileQueryApi)

export const {
    useGetProfileInfoQuery, useGetStatusQuery,
    useUpdateStatusMutation, useEditProfileInfoMutation,
    useSavePhotoMutation,
    useGetPostsQuery, useAddPostMutation, useRemovePostMutation
} = profileQueryApi