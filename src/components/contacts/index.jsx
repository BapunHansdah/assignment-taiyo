import Cross from '../../assets/icons/cross.svg'
import {Modal} from '@mantine/core'
import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {create_contact,delete_contact,edit_contact} from '../../actions/index'

export default function Index() {
	
	const [open,setOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('');
    const [info,setInfo] = useState({firstname:"",lastname:"",status:"active"})
    const [isEditing,setIsEditing] = useState(false)
    const [editingID,setEditingID] = useState(null)
    const contactList = useSelector(state=>state.CONTACT)
    const dispatch = useDispatch()

	const handleChange=(e)=>{
    e.preventDefault()
		setInfo({...info,[e.target.name]:e.target.value})
	}

	console.log(contactList)

	const handleSubmit=(e)=>{
    e.preventDefault()
   
    if(!formValidation()){
    	return
    }
    setOpen(false)
    if(isEditing){
    	dispatch(edit_contact(info,editingID))
    }else{
		   dispatch(create_contact(info))    	
    }
	}

	const formValidation=()=>{
		if(!info.firstname){
			alert("please enter firstname")
			return false
		}
		if(!info.lastname){
			alert("please enter lastname")
			return false
		}

		// if(contactList.some((obj) => obj.firstname === info.firstname && obj.lastname === info.lastname)){
		// 	alert("this contact info already exist.")
		// 	return false
		// }
		return true;
	}

	const handleEdit=(id,firstname,lastname,status)=>{
		setOpen(true)
		setIsEditing(true)
		setEditingID(id)
		setInfo({firstname:firstname,lastname:lastname,status:status})		
	}

  const handleDelete=(id)=>{
		dispatch(delete_contact(id))
  }

  const handleCreateContact = () =>{
  	setIsEditing(false)
  	setInfo({firstname:"",lastname:"",status:"active"})
  	setOpen(true)
  }


	return(
		   <div className="flex flex-col items-center gap-10 mt-10 justify-center">
		   <div className="">
			   	     <button onClick={handleCreateContact} className="p-2 bg-blue-500 text-white text-2xl rounded-md hover:bg-blue-400">Create contact</button>
		   </div>
       <div>
          {
           contactList && contactList.length < 1 ?
				      <div className="bg-white mx-auto flex items-center gap-3  max-w-sm p-5 rounded-md shadow">    
						     <div className="">
						      <img src={Cross} className="w-10 bg-white border-8 border-black rounded-full  invert "/>
						     </div>
						      <p>No contact found please add contact from create contact button.</p>
						   </div>
            :
            <div className="flex flex-wrap gap-3 justify-center">
            {
           	contactList.map((m,i)=>{
          		return(
          			   <div className="" key={m.id}>

          			      <div className="p-5 grid rounded-md shadow-md border-black bg-white w-40 h-40">
          			   	  <div className="">
          			   	     <label className="font-bold">Name</label>
          			   	     <h1 className="break-all">{`${m.firstname} ${m.lastname}`}</h1>
          			      </div>
          			      <div className="flex items-center w-4 h-4 gap-1">
          			   	   <div className={`${m.status === "active" ? "bg-green-500" : "bg-red-500"}  p-2 rounded-full`}></div>
          			   	   <div className="">{m.status === "active" ? "Active" : "Inactive"}</div>
          			   	  </div>
          			   	  
          			   	  </div>
          			   	  <div className="grid gap-1 mt-2">
          			   	  	<button onClick={()=>handleEdit(m.id,m.firstname,m.lastname,m.status)} className="bg-blue-500 hover:bg-blue-400 text-white rounded-md">Edit</button>
          			   	  	<button onClick={()=>handleDelete(m.id)} className="bg-red-500 hover:bg-red-400 text-white rounded-md">Delete</button>
          			   	  </div>
          			   </div>
          			)
          	})
           }
           </div>
          }
       </div>
       
       
       


		   <Modal
                     opened={open}
                     onClose={() => setOpen(false)}
                     title="Create contact"

              >
              <form className="grid gap-2" onSubmit={handleSubmit}>
                <label className="font-bold">First Name</label>
              	<input onChange={handleChange} name="firstname" value={info.firstname} className="p-2" placeholder="firstname" />
              	<label className="font-bold">Last Name</label>
              	<input onChange={handleChange} name="lastname" value={info.lastname} className="p-2" placeholder="lastname" />
              	<label className="font-bold">Status</label>
              	<div className="grid items-center gap-1">
			      <label className="flex items-center gap-2">
			        <input
			          type="radio"
			          value="active"
			          name="status"
			          checked={info.status === 'active'}
			          onChange={handleChange}
			        />
			        Active
			      </label>
			      <label className="flex items-center gap-2">
			        <input
			          type="radio"
			          value="inactive"
			          name="status"
			          checked={info.status === 'inactive'}
			          onChange={handleChange}
			        />
			        Inactive
			      </label>
			    </div>
			    <button className="p-2 bg-blue-500 text-white hover:bg-blue-400 uppercase">{`${isEditing ?"Edit" :"Create"}`}</button>
              </form>
            </Modal>

		   </div>
		)
}