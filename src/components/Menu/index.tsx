import React, {useState} from 'react';

const Menu = () => {

	const [active, setActive] = useState(0)
	const [isNavOpen, setIsNavOpen] = useState(false)

	return (
		<div className="menu__container">
			<h2 className="menu__title">Меню</h2>
			<menu className="menu">
				<li className="menu__item" onClick={()=>{}}>
					<div className="menu__item-icon-wrap">
						<img src="/menu-items/home.svg" className="menu__item-icon"/>
					</div>
					<a className="menu__item-title" href="/">Главная</a>
				</li>
				<li className="menu__item">
					<div className="menu__item-icon-wrap">
						<img src="/menu-items/search.svg" className="menu__item-icon"/>
					</div>
					<a className="menu__item-title" href="/address">Поиск адресов</a>
				</li>
				<li className="menu__item">
					<div className="menu__item-icon-wrap">
						<img src="/menu-items/tables.svg" className="menu__item-icon"/>
					</div>
					<a className="menu__item-title" href="/">Таблицы</a>
				</li>
				<li className="menu__item">
					<div className="menu__item-icon-wrap">
						<img src="/menu-items/calendar.svg" className="menu__item-icon"/>
					</div>
					<a className="menu__item-title" href="/">Календарь</a>
				</li>
				<li className="menu__item">
					<div className="menu__item-icon-wrap">
						<img src="/menu-items/maps.svg" className="menu__item-icon"/>
					</div>
					<a className="menu__item-title" href="/">Карты</a>
				</li>
				<li className="menu__item">
					<div className="menu__item-icon-wrap">
						<img src="/menu-items/widgets.svg" className="menu__item-icon"/>
					</div>
					<a className="menu__item-title" href="/">Виджеты</a>
				</li>

				<li className="menu__item">
					<details>
						<summary className="menu__item">
							<div className="menu__item-icon-wrap">
								<img src="/menu-items/settings.svg" className="menu__item-icon"/>
							</div>
							<a className="menu__item-title">Настройки</a>
							<div>
								<img src="/menu-items/open-close-settings.svg" className="open-close"/>
							</div>
						</summary>

						<menu className="details__menu">
							<li className="menu__item">
								<div className="menu__item-icon-wrap">
									<img src="/menu-items/person-settings.svg" className="menu__item-icon"/>
								</div>
								<a className="menu__item-title" href="/">Настройки профиля</a>
							</li>
							<li className="menu__item">
								<div className="menu__item-icon-wrap">
									<img src="/menu-items/finances.svg" className="menu__item-icon"/>
								</div>
								<a className="menu__item-title" href="/">Управление финансами</a>
							</li>
						</menu>
					</details>
				</li>

				<li className="menu__item">
					<div className="menu__item-icon-wrap">
						<img src="/menu-items/logout.svg" className="menu__item-icon"/>
					</div>
					<a className="menu__item-title" href="/">Выход</a>
				</li>
			</menu>

			<div className="mobile-menu">
				<div
					className="mobile-menu__hamburger"
					onClick={() => setIsNavOpen(!isNavOpen)}
				>
					<span className="mobile-menu__line"></span>
					<span className="mobile-menu__line"></span>
					<span className="mobile-menu__line"></span>
				</div>

				<div
					className={isNavOpen ? "showMenuNav" : "hideMenuNav"}
				>

					<div
						className="crest"
						onClick={() => setIsNavOpen(!isNavOpen)}
					>
						<svg
							className="crest__svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<line x1="18" y1="6" x2="6" y2="18"/>
							<line x1="6" y1="6" x2="18" y2="18"/>
						</svg>
					</div>

					<menu className="mobile-menu__menu">
						<li className="menu__item">
							<div className="menu__item-icon-wrap">
								<img src="/menu-items/home.svg" className="menu__item-icon"/>
							</div>
							<a className="menu__item-title" href="/">Главная</a>
						</li>
						<li className="menu__item">
							<div className="menu__item-icon-wrap">
								<img src="/menu-items/search.svg" className="menu__item-icon"/>
							</div>
							<a className="menu__item-title" href="/address">Поиск адресов</a>
						</li>
						<li className="menu__item">
							<div className="menu__item-icon-wrap">
								<img src="/menu-items/tables.svg" className="menu__item-icon"/>
							</div>
							<a className="menu__item-title" href="/">Таблицы</a>
						</li>
						<li className="menu__item">
							<div className="menu__item-icon-wrap">
								<img src="/menu-items/calendar.svg" className="menu__item-icon"/>
							</div>
							<a className="menu__item-title" href="/">Календарь</a>
						</li>
						<li className="menu__item">
							<div className="menu__item-icon-wrap">
								<img src="/menu-items/maps.svg" className="menu__item-icon"/>
							</div>
							<a className="menu__item-title" href="/">Карты</a>
						</li>
						<li className="menu__item">
							<div className="menu__item-icon-wrap">
								<img src="/menu-items/widgets.svg" className="menu__item-icon"/>
							</div>
							<a className="menu__item-title" href="/">Виджеты</a>
						</li>

						<li className="menu__item">
							<details>
								<summary className="menu__item">
									<div className="menu__item-icon-wrap">
										<img src="/menu-items/settings.svg" className="menu__item-icon"/>
									</div>
									<a className="menu__item-title">Настройки</a>
									<div>
										<img src="/menu-items/open-close-settings.svg" className="open-close"/>
									</div>
								</summary>

								<menu className="details__menu">
									<li className="menu__item">
										<div className="menu__item-icon-wrap">
											<img src="/menu-items/person-settings.svg" className="menu__item-icon"/>
										</div>
										<a className="menu__item-title" href="/">Настройки профиля</a>
									</li>
									<li className="menu__item">
										<div className="menu__item-icon-wrap">
											<img src="/menu-items/finances.svg" className="menu__item-icon"/>
										</div>
										<a className="menu__item-title" href="/">Управление финансами</a>
									</li>
								</menu>
							</details>
						</li>

						<li className="menu__item">
							<div className="menu__item-icon-wrap">
								<img src="/menu-items/logout.svg" className="menu__item-icon"/>
							</div>
							<a className="menu__item-title" href="/">Выход</a>
						</li>
					</menu>
				</div>

			</div>

		</div>
	);
};

export default Menu;
