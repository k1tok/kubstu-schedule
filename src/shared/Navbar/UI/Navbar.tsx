import { NavLink } from '../../../entities/NavLink';

export const Navbar = () => {
	const links = ['Главная страница', 'Преподаватели', 'О нас'];

	return (
		<div className="flex justify-around bg-gray-800 min-h-16 items-center">
			<div>Расписание КубГТУ</div>
			<div className="flex gap-10">
				{links.map((link, index) => (
					<NavLink key={index} text={link} />
				))}
			</div>
		</div>
	);
};
