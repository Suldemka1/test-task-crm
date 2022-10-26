import React, {useEffect, useState} from 'react';

const Header = () => {
	const [scroll, setScroll] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});

	const onScroll = (e: Event) => {
		const window = e.currentTarget as Window;
		let currentPosition = window.scrollY;
		currentPosition > 0 ? setScroll(true) : setScroll(false);
	};

	return (
		<header className={scroll ? 'fixed' : ''}>
			<div className="container">
				<div className="header-content">

					<div className="header-content__logo">
						<img src="/ic_logo.svg" className="header-content__logo-img"/>
						<h2 className="header-content__logo-title"><a href="/">Wrench CRM</a></h2>
					</div>

					<div className="header-content__auth">
						<img src="/ic_person.svg" className="header-content__auth-img"/>
						<h2 className="header-content__auth-title">Имя Фамилия</h2>
					</div>

				</div>
			</div>
		</header>
	);
};

export default Header;
