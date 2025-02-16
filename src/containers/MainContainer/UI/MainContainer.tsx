import { ReactNode } from 'react';
import { Navbar } from '../../../shared/Navbar';

interface MainContainerProps {
	children: ReactNode;
}

export const MainContainer = ({ children }: MainContainerProps) => {
	return (
		<div className="bg-slate-700 min-h-screen text-white ">
			<Navbar />
			{children}
		</div>
	);
};
