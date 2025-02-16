import { NavLink } from 'react-router-dom';

interface NavbarLinkProps {
	text: string;
	link: string;
}

export const NavbarLink = ({ text, link }: NavbarLinkProps) => {
	return (
		<NavLink
			to={link}
			className="border-b-2 p-1 hover:border-b-blue-500 transition-colors cursor-pointer text-sm"
		>
			{text}
		</NavLink>
	);
};
