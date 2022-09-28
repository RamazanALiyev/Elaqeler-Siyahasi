import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { editCurUser } from "../features/Userslice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { MdPublishedWithChanges } from "react-icons/md";
import { Helmet } from "react-helmet";
const Edituser = () => {
	const pathname = useParams();
	const [edituser, seteditUser] = useState("");
	const [load, setLoad] = useState(true);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		axios
			.get(`https://633133d43ea4956cfb58ac8a.mockapi.io/users/${pathname.id}`)
			.then((resp) => {
				seteditUser(resp.data);
				setLoad(false);
			});
	}, [pathname.id]);
	const editSubmit = (e) => {
		e.preventDefault();
		if (
			edituser.name.trim().length !== 0 &&
			edituser.surName.trim().length !== 0 &&
			edituser.dadName.trim().length !== 0 &&
			edituser.email.trim().length !== 0 &&
			edituser.phone.trim().length !== 0 &&
			edituser.birthDay.trim().length !== 0 &&
			edituser.detailInfo.trim().length !== 0 &&
			!edituser.city.select &&
			!edituser.education.select &&
			!edituser.gender.select
		) {
			dispatch(editCurUser(edituser));
			navigate("/lists", {
				replace: true,
			});
			toast.success(
				`${edituser.name[0]
					.toUpperCase()
					.concat(
						edituser.name.slice(1)
					)} adlı istifadəçi məlumatları ugurlar yenilenmisdir!!!`
			);
		} else {
			toast.error("Məlumatlar boş göndərilə bilməz!");
		}
	};
	return (
		<div className="h-[calc(100vh-20vh)] flex justify-center items-center bgImageAzerbaijanFlag">
			{load ? (
				<p className="w-3/4 h-[60vh] border bg-yellow-900 flex gap-x-8 flex-wrap justify-center content-center text-white">
					Zəhmət olmasa gözləyin...
				</p>
			) : (
				<form
					onSubmit={editSubmit}
					className="w-3/4 border bg-yellow-900 flex gap-x-8 flex-wrap justify-center content-center py-4"
				>
					<Helmet>
						<meta charSet="utf-8" />
						<title>{edituser?.name} haqqında məlumatların dəyişdirilməsi</title>
					</Helmet>
					<label className="relative my-3 w-[30%]">
						<input
							onChange={(e) =>
								seteditUser((edituser) => ({
									...edituser,
									name: e.target.value,
								}))
							}
							value={edituser.name}
							required
							maxLength={25}
							type="text"
							className="border w-full h-12 focus:border-gray-600 pl-2 peer"
						/>
						<span className="absolute top-[50%] left-2 -translate-y-[50%] peer-valid:-top-0 peer-valid:bg-indigo-400 peer-valid:px-4 peer-valid:py-[2px] peer-valid:rounded peer-valid:text-[10px] transition duration-300 ease-out  ">
							Ad
						</span>
					</label>
					<label className="relative my-3 w-[30%]">
						<input
							onChange={(e) =>
								seteditUser((edituser) => ({
									...edituser,
									surName: e.target.value,
								}))
							}
							value={edituser.surName}
							required
							maxLength={25}
							type="text"
							className="border w-full h-12 focus:border-gray-600 pl-2 peer"
						/>
						<span className="absolute top-[50%] left-2 -translate-y-[50%] peer-valid:-top-0 peer-valid:bg-indigo-400 peer-valid:px-4 peer-valid:py-[2px] peer-valid:rounded peer-valid:text-[10px] transition duration-300 ease-out  ">
							Soyad
						</span>
					</label>
					<label className="relative my-3 w-[30%]">
						<input
							onChange={(e) =>
								seteditUser((edituser) => ({
									...edituser,
									dadName: e.target.value,
								}))
							}
							value={edituser.dadName}
							required
							maxLength={25}
							type="text"
							className="border w-full h-12 focus:border-gray-600 pl-2 peer"
						/>
						<span className="absolute top-[50%] left-2 -translate-y-[50%] peer-valid:-top-0 peer-valid:bg-indigo-400 peer-valid:px-4 peer-valid:py-[2px] peer-valid:rounded peer-valid:text-[10px] transition duration-300 ease-out  ">
							Ata adı
						</span>
					</label>
					<label className="relative my-3 w-[30%]">
						<input
							onChange={(e) =>
								seteditUser((edituser) => ({
									...edituser,
									email: e.target.value,
								}))
							}
							value={edituser.email}
							required
							maxLength={50}
							type="text"
							className="border w-full h-12 focus:border-gray-600 pl-2 peer"
						/>
						<span className="absolute top-[50%] left-2 -translate-y-[50%] peer-valid:-top-0 peer-valid:bg-indigo-400 peer-valid:px-4 peer-valid:py-[2px] peer-valid:rounded peer-valid:text-[10px] transition duration-300 ease-out  ">
							Email
						</span>
					</label>
					<label className="relative my-3 w-[30%]">
						<input
							onChange={(e) =>
								seteditUser((edituser) => ({
									...edituser,
									phone: e.target.value,
								}))
							}
							value={edituser.phone}
							required
							maxLength={50}
							type="tel"
							className="border w-full h-12 focus:border-gray-600 pl-2 peer"
						/>
						<span className="absolute top-[50%] left-2 -translate-y-[50%] peer-valid:-top-0 peer-valid:bg-indigo-400 peer-valid:px-4 peer-valid:py-[2px] peer-valid:rounded peer-valid:text-[10px] transition duration-300 ease-out  ">
							Əlaqə nömrəsi
						</span>
					</label>
					<label className="relative my-3 w-[30%]">
						<select
							onChange={(e) =>
								seteditUser((edituser) => ({
									...edituser,
									city: e.target.value,
								}))
							}
							value={edituser.city}
							className="border w-full h-12 focus:border-gray-600 pl-2"
						>
							<option selected disabled hidden>
								Şəhər
							</option>
							<option>Ağcabədi</option>
							<option>Ağdam</option>
							<option>Ağdaş</option>
							<option>Ağdərə</option>
							<option>Ağstafa</option>
							<option>Ağsu</option>
							<option>Astara</option>
							<option>Babək</option>
							<option>Bakı</option>
							<option>Balakən</option>
							<option>Beyləqan</option>
							<option>Bərdə</option>
							<option>Biləsuvar</option>
							<option>Cəbrayıl</option>
							<option>Cəlilabad</option>
							<option>Daşkəsən</option>
							<option>Dəliməmmədli</option>
							<option>Xocalı</option>
							<option>Füzuli</option>
							<option>Gədəbəy</option>
							<option>Gəncə</option>
							<option>Goranboy</option>
							<option>Göyçay</option>
							<option>Göygöl</option>
							<option>Göytəpə</option>
							<option>Hacıqabul</option>
							<option>Horadiz</option>
							<option>Xaçmaz</option>
							<option>Xankəndi</option>
							<option>Xocalı</option>
							<option>Xocavənd</option>
							<option>Xırdalan</option>
							<option>Xızı</option>
							<option>Xudat</option>
							<option>İmişli</option>
							<option>İsmayıllı</option>
							<option>Kəlbəcər</option>
							<option>Kürdəmir</option>
							<option>Qax</option>
							<option>Qazax</option>
							<option>Qəbələ</option>
							<option>Qobustan</option>
							<option>Qovlar</option>
							<option>Quba</option>
							<option>Qubadlı</option>
							<option>Qusar</option>
							<option>Laçın</option>
							<option>Lerik</option>
							<option>Lənkəran</option>
							<option>Liman</option>
							<option>Masallı</option>
							<option>Mingəçevir</option>
							<option>Naftalan</option>
							<option>Naxçıvan</option>
							<option>Neftçala</option>
							<option>Oğuz</option>
							<option>Ordubad</option>
							<option>Saatlı</option>
							<option>Sabirabad</option>
							<option>Salyan</option>
							<option>Samux</option>
							<option>Siyəzən</option>
							<option>Sumqayıt</option>
							<option>Şabran</option>
							<option>Şahbuz</option>
							<option>Şamaxı</option>
							<option>Şəki</option>
							<option>Şəmkir</option>
							<option>Şərur</option>
							<option>Şirvan</option>
							<option>Şuşa</option>
							<option>Tərtər</option>
							<option>Tovuz</option>
							<option>Ucar</option>
							<option>Yardımlı</option>
							<option>Yevlax</option>
							<option>Zaqatala</option>
							<option>Zəngilan</option>
							<option>Zərdab</option>
						</select>
					</label>
					<label className="relative my-3 w-[30%]">
						<input
							onChange={(e) =>
								seteditUser((edituser) => ({
									...edituser,
									birthDay: e.target.value,
								}))
							}
							value={edituser.birthDay}
							required
							maxLength={25}
							type="date"
							className="border w-full h-12 focus:border-gray-600 pl-2 peer"
						/>
						<span className="absolute invisible top-[50%] left-2 -translate-y-[50%] peer-valid:-top-0 peer-valid:bg-indigo-400 peer-valid:px-4 peer-valid:py-[2px] peer-valid:rounded peer-valid:text-[10px] peer-valid:visible  transition duration-300 ease-out  ">
							Doğum tarixi
						</span>
					</label>
					<label className="relative my-3 w-[30%]">
						<select
							onChange={(e) =>
								seteditUser((edituser) => ({
									...edituser,
									education: e.target.value,
								}))
							}
							value={edituser.education}
							className="border w-full h-12 focus:border-gray-600 pl-2"
						>
							<option selected disabled hidden>
								Təhsil
							</option>
							<option>Orta</option>
							<option>Bakalavr</option>
							<option>Magistr</option>
							<option>Doktrantura</option>
						</select>
					</label>
					<label className="relative my-3 w-[30%]">
						<select
							onChange={(e) =>
								seteditUser((edituser) => ({
									...edituser,
									gender: e.target.value,
								}))
							}
							value={edituser.gender}
							className="border w-full h-12 focus:border-gray-600 pl-2"
						>
							<option selected disabled hidden>
								Cinsiyyət
							</option>
							<option>Kişi</option>
							<option>Qadın</option>
						</select>
					</label>
					<label className="relative mx-3 mt-3 w-full">
						<textarea
							onChange={(e) =>
								seteditUser((edituser) => ({
									...edituser,
									detailInfo: e.target.value,
								}))
							}
							value={edituser.detailInfo}
							maxLength={950}
							required
							type="text"
							className="resize-none h-48 border w-[100%] h-12 py-3 pr-4 focus:border-gray-600 pl-2 peer"
						/>
						<span className="absolute top-[25px] left-2 -translate-y-[50%] peer-valid:-top-0 peer-valid:bg-indigo-400 peer-valid:px-4 peer-valid:py-[2px] peer-valid:rounded peer-valid:text-[10px] transition duration-300 ease-out  ">
							Əlaqə qeyd daxil edin...
						</span>
					</label>
					<button
						disabled={
							edituser.name.trim().length !== 0 &&
							edituser.surName.trim().length !== 0 &&
							edituser.dadName.trim().length !== 0 &&
							edituser.email.trim().length !== 0 &&
							edituser.phone.trim().length !== 0 &&
							edituser.birthDay.trim().length !== 0 &&
							edituser.detailInfo.trim().length !== 0 &&
							!edituser.city.select &&
							!edituser.education.select &&
							!edituser.gender.select
								? false
								: true
						}
						type="submit"
						className="absolute right-10 bottom-24 bg-yellow-900 flex justify-center items-center rounded-[50%] w-[60px] h-[60px] disabled:opacity-30 transition duration-600 ease-out"
					>
						<MdPublishedWithChanges className="text-2xl" />
					</button>
				</form>
			)}
		</div>
	);
};

export default Edituser;
