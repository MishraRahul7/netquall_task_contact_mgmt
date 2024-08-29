import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const endpoint = 'http://localhost:4000';
export interface contactInterface {
  id?: number;
  first_name: string;
  last_name: string;
  status: string;
}

interface initialStateInterface{
    contacts: any,
    status: string,
    loading: boolean,
    error: boolean | null,
  };
const initialState:initialStateInterface = {
  contacts: [],
  status: 'idle',
  loading: false,
  error: null
};

export const getContactsDetails = createAsyncThunk(
  `contact/getContacts`,
  async (contactData: any, thunkAPI) => {
    const config = {
      method: 'get',
      url: `${endpoint}/contact`,
      headers: {
        Authorization: '',
        'Content-Type': ''
      }
    };
    const response: any = await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log('--view-->', response.data);
    return response.data;
  }
);

export const postContactDetails = createAsyncThunk(
  `postContactDetails`,
  async (contactData: any, {rejectWithValue}) => {
    const config = {
      method: 'post',
      url: `${endpoint}/contact`,
      headers: {
        Authorization: '',
        'Content-Type': ''
      },
      data: JSON.stringify(contactData)
    };
    const response: any = await axios(config)
      .then(function (response) {
        return JSON.stringify(response.data);
      })
      .catch(function (error) {
         return rejectWithValue(error)
      });
    return response;
  }
);

export const editContactDetails = createAsyncThunk(
  `contact/editContact`,
  async (contactData: any, thunkAPI) => {
    const config = {
      method: 'PATCH',
      url: `${endpoint}/contact`,
      headers: {
        Authorization: '',
        'Content-Type': ''
      },
      data: contactData
    };
    const response: any = await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log('--edit-->', response.data);
    return response.data;
  }
);

export const deleteContactDetails = createAsyncThunk(
  `contact/deleteContact`,
  async (contactData: any, thunkAPI) => {
    const config = {
      method: 'delete',
      url: `${endpoint}/contact`,
      headers: {
        Authorization: '',
        'Content-Type': ''
      },
      data: contactData
    };
    const response: any = await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log('--delete-->', response.data);
    return response.data;
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action) => {
      return {
        ...state,
        contacts: action.payload
      };
    },
    getContacts: (state, action) => {
      return {
        ...state,
        contacts: action.payload
      };
    },
    editContact: (state, action) => {
      return {
        ...state,
        contacts: action.payload
      };
    },
    deleteContact: (state, action) => {
      return {
        ...state,
        contacts: action.payload
      };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postContactDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(postContactDetails.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.contacts.push(action.payload);
      })
      .addCase(postContactDetails.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const contactActions = { ...contactSlice.actions };
export default contactSlice.reducer;
