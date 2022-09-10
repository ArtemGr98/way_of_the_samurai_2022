import instanceApi from "../instanceQueryApi";

let postLength;

export const profileQueryApi = instanceApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileInfo: build.query({
            query: (userId) => `/profile/${userId}`,
            providesTags: ['ProfileInfo']
        }),
        editProfileInfo: build.mutation({
            query: (body) => ({
                url: 'profile',
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['ProfileInfo']
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
            invalidatesTags: () => [{type: "Posts", id: "LIST"}]
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