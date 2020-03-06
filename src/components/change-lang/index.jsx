import React, {useContext} from "react"
import './index.scss'
import {I18nContext} from "../../layouts/base-layout";
import { Link } from "gatsby"

const ChangeLang=()=>{
	const { metaRu } = useContext(I18nContext);

	const postfix = ' active';
	let ruClassName = 'mr-5';
	let uaClassName = '';

	metaRu.lang === "ru_RU"
		?ruClassName=ruClassName+postfix
		:uaClassName=uaClassName+postfix;

	return(
	<div className='container change-lang'>
		<div className="row">
			<div className="offset-md-8 col">
				<Link to="/ru/" className={ruClassName}>{metaRu.langs.ru}</Link>
				<Link to="/ua/" className={uaClassName}>{metaRu.langs.ua}</Link>
			</div>
		</div>
	</div>
)};

export default ChangeLang
