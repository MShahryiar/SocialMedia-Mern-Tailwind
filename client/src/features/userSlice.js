import {createSlice } from "@reduxjs/toolkit"

// export const getUserFriends = createAsyncThunk(
//     'user/friends',

// )

const initialState =  {
    user:null,
    friends:[],
    posts:[],
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

export const {login, logout, setFriends, setPosts, setPost} = userSlice.actions

export const selectUser = (state) => state.user.user

export default userSlice.reducer

// const getUserFriends = async() => {
    
//     try{
//       const res = await fetch(
//         `http://localhost:3001/users/${UserId}/friends`,
//         {
//           method:"GET",
//         }
//         )
//         const data = await res.json();       
//         // 
//         setUserFriends(data.friends)
//         console.log("user Friends - FETCHED",userFriends)
//         dispatch(setFriends({friends:data.friends}))

//         // 
//         // dispatch(
//         //   login({
//         //     uid:userAuth.uid,
//         //     email:userAuth.email
//         //   })
//         // )
//         // console.log("Friends ->", userFriends)
//         // console.log("UserId FriendsComponent - ", UserId)
//       }
//       catch(err){
//         console.log(err)
//       }
//       }
