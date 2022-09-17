import React, { useEffect } from "react";
import { FcInfo } from "react-icons/fc";
import { FiEdit, FiDelete } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, deleteUser } from "../features/Userslice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
const Lists = () => {
	const users = useSelector((state) => state.fetchUsers);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);
	return (
		<div className="min-h-[calc(100vh-9rem)] flex flex-col items-center py-12 bgImageAzerbaijanFlag">
			<h1 className="text-3xl mb-4 text-white">Siyahılar</h1>
			<table className="w-3/4 bg-zinc-100 rounded-lg">
				<thead>
					<tr className="border-b">
						<th className="border-r px-3 py-4">Ad</th>
						<th className="border-r px-3 py-4">Soyad</th>
						<th className="border-r px-3 py-4">Ata adı</th>
						<th className="border-r px-3 py-4">Email</th>
						<th className="border-r px-3 py-4">Doğum tarixi</th>
						<th className="border-r px-3 py-4">Cinsiyyət</th>
						<th className="border-r px-3 py-4">Məlumat</th>
						<th className="border-r px-3 py-4">Dəyişiklər et</th>
						<th className="px-2 py-4">Siyahını sil</th>
					</tr>
				</thead>
				{users.loading && (
					<tbody>
						<tr className="text-center">
							<td className="h-24" colSpan={9}>
								Zəhmət olmasa gözləyin...
							</td>
						</tr>
					</tbody>
				)}
				{!users.loading && users.error ? <div>Error</div> : null}
				{!users.loading && users.users.length === 0 ? (
					<tbody>
						{
							<tr className="text-center">
								<td colSpan={9} className="border-r px-3 py-4 w-full">
									<p className="mb-2 block py-2 bg-rose-500 text-white rounded">
										Siyahılar listəsi boşdur!
									</p>
									<Link
										to="/createnewList"
										className="block py-2 bg-indigo-500 text-white rounded"
									>
										Yeni istifadəçi əlavə etmək üçün keçid edin!
									</Link>
								</td>
							</tr>
						}
					</tbody>
				) : null}
				{!users.loading && users.users.length ? (
					<tbody className="forOverflow">
						{users.users.map((user, index) => (
							<tr key={index} className="text-center border-b rounded-lg">
								<td className="border-r px-3 py-4">{user.name}</td>
								<td className="border-r px-3 py-4">{user.surName}</td>
								<td className="border-r px-3 py-4">{user.dadName}</td>
								<td className="border-r px-3 py-4">{user.email}</td>
								<td className="border-r px-3 py-4">{user.birthDay}</td>
								<td className="border-r px-3 py-4">{user.gender}</td>
								<td className="border-r px-3 py-4 cursor-pointer">
									<Link to={`/lists/detail/${user.id}`}>
										<FcInfo className="mx-auto" />
									</Link>
								</td>
								<td className="border-r px-3 py-4 cursor-pointer">
									<Link to={`/lists/edit/${user.id}`}>
										<FiEdit className="mx-auto" />
									</Link>
								</td>
								<td
									onClick={(id) => {
										dispatch(deleteUser(user.id, user.name, user.surName));
										toast.success(
											`${user.name} ${user.surName} adlı istifadəçi siyahıdan silindi!`
										);
									}}
									className="px-2 py-4 pr-6 cursor-pointer"
								>
									<FiDelete className="ml-auto text-rose-800" />
								</td>
							</tr>
						))}
					</tbody>
				) : null}
			</table>
		</div>
	);
};

export default Lists;
