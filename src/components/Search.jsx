import { useState } from 'react';

import { SearchResult } from '../components/SearchResult';

import { Button } from '@nextui-org/react';
import { Input } from '@nextui-org/react';

const Search = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const placements = ['outside'];

	const handleSearch = () => {
		alert('Se realizó una búsqueda');
	};

	return (
		<div>
			<h1 className='text-xl text-center font-bold pb-10 uppercase'>
				Encuentra tu personaje favorito
			</h1>

			<form
				className='w-[600px] flex gap-5 mx-auto'
				onSubmit={(e) => {
					e.preventDefault();
					handleSearch();
				}}>
				<div className='flex w-full flex-wrap items-end md:flex-nowrap pb-4 mb-6 md:mb-0 gap-4'>
					{placements.map((placement) => (
						<Input
							color='primary'
							key={placement}
							type='email'
							label='Escribe el personaje que buscas'
							labelPlacement={placement}
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					))}
				</div>
				<Button
					onClick={handleSearch}
					color='primary'>
					Buscar
				</Button>
			</form>

			<SearchResult searchValue={searchTerm} />
		</div>
	);
};

export default Search;
