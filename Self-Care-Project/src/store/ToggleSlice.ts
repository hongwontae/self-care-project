import {createSlice, PayloadAction  } from '@reduxjs/toolkit';

interface ToogleState {
    isDate : string | null
}

const initialState : ToogleState = {
    isDate : null
}

const toggleSlice  = createSlice({  
    name : 'toggle',
    initialState,
    reducers : {
        setDate : (state, action : PayloadAction<string>)=>{
            state.isDate = action.payload
        }
    }
})

export const {setDate} = toggleSlice.actions;
export default toggleSlice.reducer;

