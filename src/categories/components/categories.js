import React from 'react'
import Category from './category'
import './categories.css'
import Search from '../../widgets/components/search';

function Categories(props){
	console.log(props.categories);
	return(
		
		<div className="Categories">
		<Search />
		{
			props.categories.map( (item) => {
				return (<Category 
						key={item.id} 
						{...item} 
						handleOpenModal={props.handleOpenModal}/>)
			})
		}
		</div>
	)
}

export default Categories