import { configureStore } from "@reduxjs/toolkit";
import fetchUsers from "./features/Userslice";

export const store = configureStore({
	reducer: {
		fetchUsers,
	},
});
