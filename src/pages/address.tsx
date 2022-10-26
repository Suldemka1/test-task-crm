import React, {ChangeEvent, useState} from 'react';
import MainLayout from "../layouts/mainLayout";
import Pageheader from "../components/Pageheader";

const Address = () => {
	let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
	let token = "920cb21ca54c0da56870a40738c12e74f4f78aed";

	const [search, setSearch] = useState('')
	const [data, setData] = useState([])

	const handleClick = async () => {
		await fetch(url, {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Token " + token
			},
			body: JSON.stringify({query: search})
		})
			.then(response => response.json())
			.then(result => setData(result.suggestions))
			.catch(error => console.log("error", error));
	}

	return (
		<MainLayout>
			<div style={{width: "100%"}}>
				<Pageheader
					title="Поиск адресов"
					subtitle="Введите интересующий вас адрес"
				/>

				<div className="search-field__container">
					<input type="text"
						   onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
							 minLength={3}
						   className="search-field__input"
						   placeholder="Введите интересующий вас адрес"/>

					<button className="search-field__button" onClick={handleClick}>
						<img src="/search.png"/>
						<p>Поиск</p>
					</button>
				</div>

				{
					data.length > 0 &&
                    <div>
                        <div className="result__container">
                            <h2>Адреса</h2>
							{
								data?.map((item: {
									value: string | undefined;
								}, index) => {

									return (
										<div key={index} className="result__item">
											{item.value}
										</div>
									)
								})
							}
                        </div>
                    </div>
				}

			</div>
		</MainLayout>
	);
};

export default Address;
