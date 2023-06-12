import Logo from './Logo';
import Menu from './Menu';
import ThemeSwitcher from './ThemeSwitcher';

function Header() {
	return (
		<nav className="bg-white relative z-20 dark:bg-gray-800 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 px-8">
			<div className="w-full max-w-7xl md:max-w-3xl lg:max-w-7xl mx-auto">
				<div className="flex items-center justify-between h-16">
					<div className="w-full justify-start flex items-center">
						<Logo />
						<div className="flex-1 ml-4 text-gray-800 dark:text-white font-semibold">
							Dima Danyliuk
						</div>
						<ThemeSwitcher />
						<Menu />
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Header;
