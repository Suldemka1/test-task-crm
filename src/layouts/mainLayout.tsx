import React, {ReactNode} from 'react';
import Header from "../components/Header";
import Menu from "../components/Menu";

interface Page {
	children: ReactNode
}

const MainLayout = ({children}: Page) => {
	return (
		<>
			<Header/>
			<div className="container">
				<div className="page">
					<Menu/>
					<div style={{width: '100%'}}>
						{children}
					</div>

				</div>
			</div>

		</>
	);
};

export default MainLayout;
