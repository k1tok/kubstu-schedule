import { MainContainer } from '../../../containers/MainContainer';

export const NotFoundPage = () => {
	return (
		<MainContainer>
			<div className="flex h-screen flex-col justify-center items-center gap-2">
				<div className="text-lg">Ошибка №404</div>
				<div className="text-lg">
					К сожалению, Вы ошиблись страницей. Данной страницы не существует :(
				</div>
			</div>
		</MainContainer>
	);
};
