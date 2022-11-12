import { createSlice } from '@reduxjs/toolkit';
import { EXPERIENCE_LIST } from '../../experienceList'

const initialState = {
    experiences: EXPERIENCE_LIST,
    activeExperience: "bloomberg"
};


export const experienceSlice = createSlice({
    name: 'experience',
    initialState,

    reducers: {
        updateActiveExperience: (state, action) => {
            state.activeExperience = action.payload;
        }
    }
});

export const { updateActiveExperience } = experienceSlice.actions;

export const selectActiveExperience = (state) => { 
    if (state.experience.activeExperience) {
        return state.experience.experiences[state.experience.activeExperience];
    }
    return null;
}
export const getAllExperiences = (state) => state.experience.experiences; 


export default experienceSlice.reducer;