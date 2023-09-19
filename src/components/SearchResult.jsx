import { Suspense } from 'react';

import { fetchData } from '../hooks/fetchData';

const apiData = fetchData('https://rickandmortyapi.com/api/character');

export const SearchResult = ({ searchValue }) => {
	const data = apiData.read().results;

	const filteredData = data.filter((char) =>
		char.name.toLowerCase().includes(searchValue.toLowerCase())
	);

	return (
		<div>
			<ul className='flex flex-wrap gap-12 justify-center py-5'>
				<Suspense fallback={<div>Loading...</div>}>
					{filteredData?.map((char) => (
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
									<ul>
										<li className='font-bold'>
											Name:{' '}
											<span className='font-normal'>
												{char.name}
											</span>
										</li>
										<li className='font-bold'>
											Status:{' '}
											<span className='font-normal'>
												{char.status}
											</span>
										</li>
										<li className='font-bold'>
											Species:{' '}
											<span className='font-normal'>
												{char.species}
											</span>
										</li>
										<li className='font-bold'>
											Type:{' '}
											<span className='font-normal'>
												{char.type}
											</span>
										</li>
										<li className='font-bold'>
											Gender:{' '}
											<span className='font-normal'>
												{char.gender}
											</span>
										</li>
									</ul>
								</div>
								<div className='bg-white w-full p-4 rounded-md'>
									<h2 className='text-xl font-bold pb-2'>
										Origin
									</h2>
									<ul>
										<li className='font-bold'>
											Location:{' '}
											<span className='font-normal'>
												{char.origin.name}
											</span>
										</li>
										<li className='font-bold'>
											From:{' '}
											<span className='font-normal'>
												{char.location.name}
											</span>
										</li>
									</ul>
								</div>
							</div>
						</li>
					))}
				</Suspense>
			</ul>
		</div>
	);
};
