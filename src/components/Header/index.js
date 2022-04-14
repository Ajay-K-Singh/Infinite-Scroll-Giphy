import React, { useState, useEffect } from 'react';
import './styles.scss';

const Header = ({onClick, setGifs}) => {
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		window.addEventListener('scroll', makeHeaderSticky);
		// eslint-disable-next-line no-unused-expressions
		() => {
			window.removeEventListener('scroll');
		}
	}, []);

	const makeHeaderSticky = () => {
		const header = document.getElementById("headerId");
		const sticky = header.offsetTop;
		if (window.pageYOffset > sticky) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	}

	const handleChange = (e) => {
		setSearchTerm(e.target.value)
		if (!e.target.value) {
			onClick('')
		}
	}

	const handleClick = (e) => {
		onClick(searchTerm);
	}

  return (
		<header id={'headerId'}>
			<img className='logo' src="https://media.giphy.com/media/3o6gbbuLW76jkt8vIc/giphy.gif" 
			alt="giphy"/>
			<div className="form-search">
				<input type="search" name="search" value={searchTerm} 
				onChange={handleChange}
				placeholder="Search Gifs" />
				<button onClick={handleClick}>Search</button>  
			</div>
		</header>
  )
}

export default Header;
