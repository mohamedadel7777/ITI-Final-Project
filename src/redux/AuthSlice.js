import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/users';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, userData);
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response.data); 
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ Email, Password }, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      const user = response.data.find((user) => user.Email === Email && user.Password === Password);

      if (!user) {
        return rejectWithValue('Invalid credentials');
      }

      return user;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  isLoggedIn: false,
  user: {
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  
    register: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = {
        FirstName: '',
        LastName: '',
        Email: '',
        Password: '',
      };
    },
  },
  extraReducers: (builder) => {
    builder
      
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload; 
      })
      .addCase(registerUser.rejected, (state, action) => {
        console.error('Registration failed', action.payload); 
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        alert(`Login failed:${action.payload}`);
      });
  },
});

export const { register, logout } = authSlice.actions; 
export default authSlice.reducer; 
