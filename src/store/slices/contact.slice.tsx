import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';


const endpoint = "http://localhost:4000"
export interface contactInterface{
    id?:number,
    first_name:string,
    last_name:string,
    status:string,
}
const initialState = {
    contacts: [],
    status: 'idle',
    error: null
  }

export const getContactsDetails= createAsyncThunk(`contact/getContacts`,async(contactData:any,thunkAPI)=>{
    const config={
        method: 'get',
        url: `${endpoint}/contact`,
        headers: {
            'Authorization': '',
            'Content-Type': ''
        },
    };
    const response:any = await axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
    console.log("--view-->",response.data);
    return response.data
})

export const postContactDetails= createAsyncThunk(`contact/postContact`,async(contactData:any,thunkAPI)=>{
    const config={
        method: 'post',
        url: `${endpoint}/contact`,
        headers: {
            'Authorization': '',
            'Content-Type': ''
        },
        data: contactData
    };
    const response:any = await axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
    console.log("-post--->",response.data);
    getContacts(response.data)
    return response.data
})

export const editContactDetails= createAsyncThunk(`contact/editContact`,async(contactData:any,thunkAPI)=>{
    const config={
        method: 'PATCH',
        url: `${endpoint}/contact`,
        headers: {
            'Authorization': '',
            'Content-Type': ''
        },
        data: contactData
    };
    const response:any = await axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
    console.log("--edit-->",response.data);
    getContacts(response.data)
    return response.data
})

export const deleteContactDetails= createAsyncThunk(`contact/deleteContact`,async(contactData:any,thunkAPI)=>{
    const config={
        method: 'delete',
        url: `${endpoint}/contact`,
        headers: {
            'Authorization': '',
            'Content-Type': ''
        },
        data: contactData
    };
    const response:any = await axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
    console.log("--delete-->",response.data);
    getContacts(response.data)
    return response.data
})

const contactSlice = createSlice({
    name:"contact",
    initialState,
    reducers:{
        addContact:(state,action:{payload:contactInterface})=>{
            console.log("create contact",action.payload);
        },
        getContacts:(state,action:{payload:contactInterface})=>{
            console.log("view contact",action.payload);
        },
        editContact:(state,action:{payload:contactInterface})=>{
            console.log("edit contact",action.payload);
        },
        deleteContact:(state,action:{payload:contactInterface})=>{
            console.log("delete contact",action.payload);
        },
    },
})


export const {addContact,deleteContact,editContact,getContacts} = contactSlice.actions;
export default contactSlice.reducer;