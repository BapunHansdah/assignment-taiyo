export function setProfileData(data){
    return{
    	type:"GET_PROFILE_DATA",
    	payload:data
    }
}

export function create_contact(data){
    return{
        type:"CREATE_CONTACT",
        payload:data
    }
}


export function delete_contact(id){
    return{
        type:"DELETE_CONTACT",
        payload:{
            id
        }
    }
}



export function edit_contact(data,id){
    console.log(id,data)
    return{
        type:"EDIT_CONTACT",
        payload:{
            id:id,
            data
        }
    }
}