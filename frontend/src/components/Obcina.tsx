import React from 'react';
import Image from 'next/image';
import { computeGrb } from 'utils/constants/Grbi';
import type { Obcine } from 'utils/constants/Obcine';

export interface ObcinaProps {
	obcina: Obcine;
}

const Obcina: React.FC<ObcinaProps> = ({ obcina }) => {
	const grbLokacija = computeGrb(obcina);

	return (
		<>
			<div className="p-6 max-w-sm mx-auto bg-white dark:bg-dark-segment rounded-xl shadow-md flex items-center space-x-4 select-none cursor-pointer">
				<div className="flex-shrink-0">
					{grbLokacija ? (
						<div className="h-12 w-12 relative">
							<Image //
								src={`/grbi/${grbLokacija}`}
								alt={`Grb ${obcina}`}
								layout="fill"
								objectFit="contain"
							/>
						</div>
					) : null}
				</div>
				<div>
					<div className="text-xl font-medium text-black dark:text-dark-text">{obcina}</div>
				</div>
			</div>
		</>
	);
};

export default Obcina;
