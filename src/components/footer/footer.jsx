import React, {useContext} from "react";
import './footer.scss'
import {I18nContext} from "../../layouts/base-layout";

const Footer = () => {
	const { footer } = useContext(I18nContext);

	return(
	<div className='footer'>
		<div className="container content">
			<div className="row">

				<p className='col-sm-7'>{footer.caption}</p>
			<button className="col-sm-4 offset-sm-1 align-self-center"><i><u>{footer.buttonText}</u></i></button>
			</div>


		</div>

	</div>
)};

export default Footer
