import React from 'react';
import Link from 'next/link';
import { computeGrb } from 'utils/constants/Grbi';
import { Obcine } from 'utils/constants/Obcine';

export interface ObcinaProps {
	obcina: Obcine;
	fillColumn?: boolean;
}

const Obcina: React.FC<ObcinaProps> = ({ obcina, fillColumn }) => {
	const grbLokacija = computeGrb(obcina);

	return (
		<>
			<Link href={`/obcina/${Obcine[obcina]}`}>
				<article
					className={`p-6 mx-auto bg-white dark:bg-dark-segment rounded-xl flex items-center space-x-4 select-none cursor-pointer shadow-xl ${
						fillColumn ? 'md:col-span-3 md:max-w-none' : 'max-w-sm'
					}`}
				>
					<div className="flex-shrink-0">
						{grbLokacija ? (
							<div className="h-12 w-12 relative">
								<img //
									src={`/grbi/${grbLokacija}`}
									alt={`Grb ${obcina}`}
									loading="lazy"
								/>
							</div>
						) : null}
					</div>
					<div>
						<div className="text-xl text-center font-medium text-black dark:text-dark-text">{obcina}</div>
					</div>
				</article>
			</Link>
		</>
	);
};

export default Obcina;