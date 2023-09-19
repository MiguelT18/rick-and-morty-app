import { Suspense } from 'react';

import { fetchData } from '../hooks/fetchData';

import { Button } from '@nextui-org/react';
import { Input } from '@nextui-org/react';

const apiData = fetchData('https://rickandmortyapi.com/api/character');

const SearchResult = () => {
	const data = apiData.read().results;

	console.log(data);
	return (
		<div>
			<ul className='flex flex-wrap gap-12 justify-center py-5'>
				<Suspense fallback={<div>Loading...</div>}>
					{data?.map((char) => (
						<li
							className='bg-slate-200 w-full max-w-[450px] py-8 px-2 flex flex-col gap-8'
							key={char.id}>
							<img
								className='max-h-60 mx-auto'
								src={char.image}
								alt={char.name}
							/>
							<div className='flex justify-center flex-col items-center gap-5 px-5'>
								<div className='bg-white w-full p-4 rounded-md'>
									<h2 className='text-xl font-bold pb-2'>
										Information
									</h2>
									<div className='flex flex-col gap-1'>
										<h3 className='font-bold text-md'>
											Name:{' '}
											<span className='font-normal text-end'>
												{char.name}
											</span>
										</h3>
										<h3 className='font-bold text-md'>
											Status:{' '}
											<span className='font-normal text-end'>
												{char.status}
											</span>
										</h3>
										<h3 className='font-bold text-md'>
											Species:{' '}
											<span className='font-normal text-end'>
												{char.species}
											</span>
										</h3>
										<h3 className='font-bold text-md'>
											Gender:{' '}
											<span className='font-normal text-end'>
												{char.gender}
											</span>
										</h3>
									</div>
								</div>
								<div className='bg-white w-full p-4 rounded-md'>
									<h2 className='text-xl font-bold pb-2'>
										Origin
									</h2>
									<div className='flex flex-col gap-1'>
										<h3 className='font-bold text-md'>
											Location:{' '}
											<span className='font-normal text-end'>
												{char.origin.name}
											</span>
										</h3>
										<h3 className='font-bold text-md'>
											From:{' '}
											<span className='font-normal text-end'>
												{char.location.name}
											</span>
										</h3>
									</div>
								</div>
							</div>
						</li>
					))}
				</Suspense>
			</ul>
		</div>
	);
};

const Search = () => {
	const placements = ['outside'];

	return (
		<div>
			<h1 className='text-xl text-center font-bold pb-10 uppercase'>
				Encuentra tu personaje favorito
			</h1>

			<form className='w-[600px] flex gap-5 mx-auto'>
				<div className='flex w-full flex-wrap items-end md:flex-nowrap pb-4 mb-6 md:mb-0 gap-4'>
					{placements.map((placement) => (
						<Input
							color='primary'
							key={placement}
							type='email'
							label='Escribe la película que buscas'
							labelPlacement={placement}
						/>
					))}
				</div>
				<Button color='primary'>Buscar</Button>
			</form>

			<SearchResult />
		</div>
	);
};

export default Search;
