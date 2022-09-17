import instanceApi from "../instanceQueryApi";
import {IPosts, IProfileInfo} from "./profileQueryApiTypes";

let postLength: number;

export const profileQueryApi = instanceApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileInfo: build.query<IProfileInfo, number>({
            query: (userId) => `/profile/${userId}`,
            providesTags: ['ProfileInfo']
        }),
        editProfileInfo: build.mutation<void, IProfileInfo>({
            query: (body) => ({
                url: 'profile',
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['ProfileInfo']
        }),
        getStatus: build.query<string, number>({
            query: (userId) => `/profile/status/${userId}`,
            providesTags: ['Status'],
        }),
        updateStatus: build.mutation<void, string>({
            query: (status) => ({
                url: 'profile/status',
                method: 'PUT',
                body: {status},
            }),
            invalidatesTags: ['Status']
        }),
        savePhoto: build.mutation<void, any>({
            query: (photoFile) => {
                console.log(photoFile)
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
        getPosts: build.query<IPosts[], void>({
            query: () => 'http://localhost:3001/posts',
            providesTags: (result) => {
                if (result) {
                    postLength = result.length
                }
                return result ?
                    [
                        ...result.map(({id}) => ({type: "Posts" as const, id})),
                        {type: 'Posts', id: 'LIST'}
                    ]
                    : [{type: 'Posts', id: 'LIST'}]
            }

        }),
        addPost: build.mutation<IPosts, string>({
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
        removePost: build.mutation<IPosts, number>({
            query: (id) => ({
                url: `http://localhost:3001/posts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, arg, meta) => [{type: "Posts", id: arg}]
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