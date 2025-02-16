interface NavLinkProps {
	text: string;
}

export const NavLink = ({ text }: NavLinkProps) => {
	return (
		<a
			href="#"
			className="border-b-2 p-1 hover:border-b-blue-500 transition-colors cursor-pointer text-sm"
		>
			{text}
		</a>
	);
};
