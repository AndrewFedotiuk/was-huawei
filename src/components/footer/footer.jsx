import React, {useContext} from "react";
import './footer.scss'
import {I18nContext} from "../../layouts/base-layout";

const Footer = () => {
	const {footer} = useContext(I18nContext);

	return (
		<div className='footer'>
			<div className="container content">
				<div className="row">
					<p className='col-sm-7' dangerouslySetInnerHTML={{__html: footer.caption}}/>
					<a target="_blank" href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fhuawei.was.media%2Fru%2F' className="col-sm-4 offset-sm-1 align-self-center share-btn"><i><u>{footer.buttonText}</u></i></a>
				</div>
			</div>

		</div>
	)
};

export default Footer
