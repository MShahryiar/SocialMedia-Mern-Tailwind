import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user:null,
}

const userSlice = createSlice({
    name:'user',
    initialState,

    reducers:{
        login:(state,actions)=>{
            state.user = actions.payload
        },
        logout:(state, actions)=>{
            state.user = null
        }
    }
})

export const {login, logout} = userSlice.actions

export const selectUser = (state) => state.user.user

export default userSlice.reducer