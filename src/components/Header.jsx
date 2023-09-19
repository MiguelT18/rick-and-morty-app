export default function Header() {
	return (
		<header className='h-[10vh] flex border-b-1 bg-slate-100 justify-around items-center'>
			<h1 className='text-4xl font-bold uppercase'>Rick&Morty</h1>
			<nav>
				<p>
					Conoce a los personajes que forman la famosa serie de
					Rick&Morty
				</p>
			</nav>
		</header>
	);
}
