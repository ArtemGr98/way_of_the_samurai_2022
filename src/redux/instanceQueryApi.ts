import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

const InstanceQueryApi = createApi({
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
    endpoints: () => ({})
})

export default InstanceQueryApi;