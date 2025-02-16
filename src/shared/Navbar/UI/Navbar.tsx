import { NavbarLink } from '../../../entities/NavLink';

export const Navbar = () => {
	const links = [
		{ text: 'Главная страница', href: '/' },
		{ text: 'Преподаватели', href: '/teachers' },
		{ text: 'О нас', href: '/about' },
	];

	return (
		<div className="flex justify-around bg-gray-800 min-h-16 items-center">
			<div>Расписание КубГТУ</div>
			<div className="flex gap-10">
				{links.map(({ text, href }, index) => (
					<NavbarLink key={index} text={text} link={href} />
				))}
			</div>
		</div>
	);
};
