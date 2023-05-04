import {nanoid} from 'nanoid'
const INITIAL_DATA = {}

export const GET_PROFILE_DATA = (state=INITIAL_DATA ,action) =>{
   if(action.type==="GET_PROFILE_DATA"){
      return action.payload
   }
   return state
}

export const CONTACT = (state=[] ,action) =>{
   if(action.type==="CREATE_CONTACT"){
     return [...state,{...action.payload,id:nanoid()}]
   }

   if(action.type==="DELETE_CONTACT"){
      const del = state.filter((m,i)=>action.payload.id !== m.id)
      return del
   }
  
   if(action.type==="EDIT_CONTACT"){
      
      const edit = state.map((m,i)=>{
         const info = action.payload.data
         if(m.id === action.payload.id){
            return {...m,
                      firstname:info.firstname ,
                      lastname:info.lastname,
                      status:info.status
                  }
         }else{
            return {...m}
         }
      })
      return edit
   }


   return state
}