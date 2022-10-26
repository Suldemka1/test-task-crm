import React from 'react';

interface IParams {
	title: string
	subtitle: string
}

const Pageheader = (params : IParams) => {
	return (
		<div className="page__header">
			<h2 className="page__header-title">{params.title}</h2>
			<h3 className="page__header-subtitle">{params.subtitle}</h3>
		</div>
	);
};

export default Pageheader;
