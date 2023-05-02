import {createSlice } from "@reduxjs/toolkit"

// export const getUserFriends = createAsyncThunk(
//     'user/friends',

// )

const initialState =  {
    user:null,
    friends:[],
    posts:[],
    activeUserId:"",
    // isLoading:false,
}
const userSlice = createSlice({
    name:'user',
    initialState,

    reducers:{
        login:(state,actions)=>{
            state.user = actions.payload
        },
        logout:(state)=>{
            state.user = null
        },
        setFriends: (state, actions) => {
            if (state.user){
                state.friends = actions.payload.friends
            }else{
                console.error("User friends non-existent.")
            }
        },
        setUserId:(state, action)=>{
            state.activeUserId = action.payload
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
          },
          setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
              if (post._id === action.payload.post._id) return action.payload.post;
              return post;
            });
            state.posts = updatedPosts;
          },
    }
})

export const {login, logout, setFriends, setPosts, setPost, setUserId} = userSlice.actions

export const selectUser = (state) => state.user.user

export default userSlice.reducer

