import {useState} from 'react'
import {useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import contactSlice, { addContact } from '../store/slices/contact.slice';

interface ContactForm{
    isCreated:boolean,
}

const ContactForm = (props:ContactForm) => {
const {isCreated} = props;
const dispatch = useDispatch();
const [firstName,setFirstName]=useState("")
const [lastName,setLastName]=useState("")
const [status,setStatus]=useState("inactive")

const navigate = useNavigate();
function handleCreateContact(e:any){
    e.preventDefault();
    const formValues = {
        first_name:firstName,
        last_name:lastName,
        status
    }
    dispatch(addContact(formValues))
}

function handleCancel(){
    navigate("/",{replace:true})
}
  return (
    <form onSubmit={handleCreateContact}>
        <table>
            <tr>
                <td>
                    <label>First Name:</label>
                </td>
                <td>
                    <input type='text' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setFirstName(e.target.value)}}/>
                </td>
            </tr>
            <tr>
                <td>
                    <label>Last Name:</label>
                </td>
                <td> 
                    <input type='text' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setLastName(e.target.value)}} />
                </td>
            </tr>
            <tr>
                <td>
                    <label>Status</label>
                </td>
                <td>
                    <input type='radio' id="rb-active" value={"active"} checked={status==="active"} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setStatus(e.target.value)}} /> Active<br></br>
                    <input type='radio' id="rb-inactive" value={"inactive"} checked={status==="inactive"} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setStatus(e.target.value)}} /> Inactive
                </td>
            </tr>
            <tr>
                <td>
                    <input type='submit' value={`Save${isCreated?" ":"edited "}contact`}/></td>
                <td>
                    <input type='button' onClick={handleCancel} value={"Cancel"} />
                </td>
            </tr>
        </table>
    </form>
  )
}

export default ContactForm