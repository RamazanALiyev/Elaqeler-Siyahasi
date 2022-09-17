import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
	loading: false,
	users: [],
	error: "",
};
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
	const response = await axios.get("http://localhost:8000/users");
	return response.data;
});
export const newPostUser = createAsyncThunk(
	"user/newPostUser",
	async (initialPost) => {
		try {
			const response = await axios.post(
				`http://localhost:8000/users`,
				initialPost
			);
			console.log(response.data);
		} catch (err) {
			return initialPost;
		}
	}
);
export const editCurUser = createAsyncThunk("user/editCurUser", async (editUser, id) => {
		const response = await axios.put(
      `http://localhost:8000/users/${editUser.id}`,
      editUser
    );
    return response.data;
	}
);
export const deleteUser = createAsyncThunk("user/deleteUser", async (id, name, surname) => {
	try {
		return await axios
			.delete(`http://localhost:8000/users/${id}`)
			.then((response) => response.data);
	} catch (e) {
		return e.message;
	} finally {
		window.location.reload();
	}
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