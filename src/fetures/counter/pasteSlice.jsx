// import { createSlice } from '@reduxjs/toolkit'
// import toast from 'react-hot-toast';

// const initialState = {
//   // pates: localStorage.getItem("pastes")
//   //   ?
//   //   JSON.parse(localStorage.getItem("pastes"))
//   //   :
//   //   []
//     pates : []
// }

// export const pasteSlice = createSlice({
//   name: 'pastes',
//   initialState,
//   reducers: {
//     addToPastes: (state, action) => {
//       const paste = action.payload;
//       // add a check pates already exsist

//       const findItem = state.pates.find((item) => item.title == paste.title)
//       if (!findItem) {
//         state.pates.push(paste)
//         // localStorage.setItem("paste", JSON.stringify(state.pates))
//         toast.success("paste ctreated successfully")
//         console.log(paste)
//       }
//       else{
//         toast.error("already exsit")
//       }

//     },
//     updateToPastes: (state, action) => {
//       const paste = action.payload;
      
//       const index = state.pates.findIndex((item) => item._id === paste.id)
//       if (index >= 0) {
//         state.pates[index] = paste;
//         // localStorage.setItem("pastes", JSON.stringify(state.pates))
//         toast.success("paste updated")
//       }
//     },
//     resetToPastes: (state, action) => {
//       state.pates = []
//       localStorage.removeItem("pastes")
//     },
//     removeToPAstes: (state, action) => {
//       const pasteId = action.payload
//       const index = state.pates.findIndex((item) => item.id == pasteId)
//       if (index >= 0) {
//         state.pates.splice(index, 1)
//         // localStorage.setItem("pastes", JSON.stringify(state.pates))
//         toast.success("paste deleted successful")
//       }
//       console.log(index,pasteId)

//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const { addToPastes, removeToPAstes, updateToPastes, resetToPastes } = pasteSlice.actions

// export default pasteSlice.reducer

import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pates: [],
};

export const pasteSlice = createSlice({
  name: "pastes",
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;

      const findItem = state.pates.find((item) => item.title === paste.title);
      if (!findItem) {
        state.pates.push(paste);
        toast.success("Paste created successfully!");
      } else {
        toast.error("Paste already exists!");
      }
    },
    updateToPastes: (state, action) => {
      const paste = action.payload;
      const index = state.pates.findIndex((item) => item.id === paste.id);
   
      const findItem = state.pates.find((item) => item.title === paste.title);
      if (!findItem) {
        state.pates[index] = paste
        toast.success("Updated Paste successfully!");
      } else {
        toast.error("Paste already exists!");
      }
  //  console.log(   state.pates[index])
    },
    resetToPastes: (state) => {
      state.pates = [];
      localStorage.removeItem("pastes");
    },
    removeToPAstes: (state, action) => {
      const pasteId = action.payload;
      const index = state.pates.findIndex((item) => item.id === pasteId);
      if (index >= 0) {
        state.pates.splice(index, 1);
        // toast.success("Paste deleted successfully!");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToPastes, removeToPAstes, updateToPastes, resetToPastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
