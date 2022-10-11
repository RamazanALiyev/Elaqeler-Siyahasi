import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axios from "axios";
const initialState = {
	loading: false,
	users: [],
	error: "",
};
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
	const response = await axios.get(
		"https://633133d43ea4956cfb58ac8a.mockapi.io/users"
	);
	return response.data;
});
export const newPostUser = createAsyncThunk(
	"user/newPostUser",
	async (initialPost) => {
		try {
			const response = await axios.post(
				`https://633133d43ea4956cfb58ac8a.mockapi.io/users`,
				initialPost
			);
		} catch (err) {
			return initialPost;
		}
	}
);
export const editCurUser = createAsyncThunk(
	"user/editCurUser",
	async (editUser) => {
		const response = await axios.put(
			`https://633133d43ea4956cfb58ac8a.mockapi.io/users/${editUser.id}`,
			editUser
		);
		return response.data;
	}
);
export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
	try {
		return await axios
			.delete(`https://633133d43ea4956cfb58ac8a.mockapi.io/users/${id}`)
			.then((response) => response.data);
	} catch (e) {
		toast.error(e.message)
	}
	finally{window.location.reload()}
});
const productSlice = createSlice({
	name: "user",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.loading = false;
			state.users = action.payload;
			state.error = "";
		});
		builder.addCase(fetchUsers.rejected, (state, action) => {
			state.loading = false;
			state.users = [];
			state.error = action.error.message;
		});
	},
});
export default productSlice.reducer;
