import { useState } from 'react';
import { courseOptions } from '../constants';

export const SelectGroup = () => {
	const [selectedCourse, setSelectedCourse] = useState<string>('');
	const [selectedGroup, setSelectedGroup] = useState('');

	const handleCourseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedCourse(event.target.value);
		setSelectedGroup('');
	};

	const handleGroupChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedGroup(event.target.value);
	};

	console.log(courseOptions[parseInt(selectedCourse)]);

	return (
		<div className="flex flex-col items-center">
			<div className="flex gap-10">
				<div>
					<div>Выберите курс:</div>
					<select value={selectedCourse} onChange={handleCourseChange}>
						<option className="text-black" value="">
							Выбор курса
						</option>
						<option className="text-black" value="1">
							1
						</option>
						<option className="text-black" value="2">
							2
						</option>
						<option className="text-black" value="3">
							3
						</option>
						<option className="text-black" value="4">
							4
						</option>
					</select>
				</div>

				<div>
					<div>Выберите группу:</div>
					<select
						value={selectedGroup}
						onChange={handleGroupChange}
						disabled={!selectedCourse}
					>
						<option className="text-black" value="">
							Выбор группы
						</option>
						{selectedCourse &&
							courseOptions[parseInt(selectedCourse)].map((group) => (
								<option key={group} className="text-black" value={group}>
									{group}
								</option>
							))}
					</select>
				</div>
			</div>
			<button className="border-2 border-black bg-neutral-600 p-1 cursor-pointer mt-10">
				Перейти на страницу курса
			</button>
		</div>
	);
};
