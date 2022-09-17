import React, { useState } from "react";
import { newPostUser } from "../features/Userslice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { GrAdd } from "react-icons/gr";

const PostLists = () => {
	const [initailVal, setInitialVal] = useState({
		name: "",
		surName: "",
		dadName: "",
		email: "",
		birthDay: "",
		age: "",
		gender: "",
		detailInfo: "",
		phone: "",
		city: "",
		education: "",
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			initailVal.name.trim().length !== 0 &&
			initailVal.surName.trim().length !== 0 &&
			initailVal.dadName.trim().length !== 0 &&
			initailVal.email.trim().length !== 0 &&
			initailVal.phone.trim().length !== 0 &&
			initailVal.birthDay.trim().length !== 0 &&
			initailVal.detailInfo.trim().length !== 0 &&
			!initailVal.city.select &&
			!initailVal.education.select &&
			!initailVal.gender.select
		) {
			dispatch(newPostUser(initailVal));
			navigate("/lists", {
				replace: true,
			});
			toast.success("Siyahılar listəsinə yeni istifadəçi əlavə edildi");
		} else {
			toast.error("Məlumatlar boş göndərilə bilməz!");
		}
	};
	return (
		<div className="h-[calc(100vh-9rem)] flex justify-center items-center bgImageAzerbaijanFlag">
			<form
				onSubmit={handleSubmit}
				className="w-3/4 border bg-slate-900 flex gap-x-8 flex-wrap justify-center content-center py-4"
			>
				<label className="relative my-3 w-[30%]">
					<input
						onChange={(e) =>
							setInitialVal((initailVal) => ({
								...initailVal,
								name: e.target.value,
							}))
						}
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
							setInitialVal((initailVal) => ({
								...initailVal,
								surName: e.target.value,
							}))
						}
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
							setInitialVal((initailVal) => ({
								...initailVal,
								dadName: e.target.value,
							}))
						}
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
							setInitialVal((initailVal) => ({
								...initailVal,
								email: e.target.value,
							}))
						}
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
							setInitialVal((initailVal) => ({
								...initailVal,
								phone: e.target.value,
							}))
						}
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
							setInitialVal((initailVal) => ({
								...initailVal,
								city: e.target.value,
							}))
						}
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
							setInitialVal((initailVal) => ({
								...initailVal,
								birthDay: e.target.value,
							}))
						}
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
							setInitialVal((initailVal) => ({
								...initailVal,
								education: e.target.value,
							}))
						}
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
							setInitialVal((initailVal) => ({
								...initailVal,
								gender: e.target.value,
							}))
						}
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
							setInitialVal((initailVal) => ({
								...initailVal,
								detailInfo: e.target.value,
							}))
						}
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
						initailVal.name.trim().length !== 0 &&
						initailVal.surName.trim().length !== 0 &&
						initailVal.dadName.trim().length !== 0 &&
						initailVal.email.trim().length !== 0 &&
						initailVal.phone.trim().length !== 0 &&
						initailVal.birthDay.trim().length !== 0 &&
						initailVal.detailInfo.trim().length !== 0 &&
						!initailVal.city.select &&
						!initailVal.education.select &&
						!initailVal.gender.select
							? false
							: true
					}
					type="submit"
					className="absolute right-10 bottom-24 bg-indigo-600 flex justify-center items-center rounded-[50%] w-[60px] h-[60px] disabled:opacity-30 transition duration-600 ease-out"
				>
					<GrAdd className="text-2xl" />
				</button>
			</form>
		</div>
	);
};
export default PostLists;
