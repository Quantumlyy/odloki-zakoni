import Element from 'components/Element';
import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { Elementi } from 'utils/constants/Elementi';
import { Obcine } from 'utils/constants/Obcine';

export interface EleData {
	href: string;
	naslov: string;
	st: string;
}

export interface ObcinaPageProps {
	obcina: string;
	obcinaIme: Obcine;
	elementi: EleData[] | null;
}

const ObcinaPage: NextPage<ObcinaPageProps> = ({ obcinaIme, elementi }) => {
	return (
		<>
			<h1>{obcinaIme}</h1>
			{elementi ? (
				<>
					<div className="grid">
						<div className="flex-col flex-1 w-full p-5">
							<div className="flex-col flex-1 mb-7">
								<div className="flex-col">
									{elementi.map((ele) => (
										<Element //
											key={`${ele.naslov}-${ele.st}`}
											href={ele.href}
											naslov={ele.naslov}
											st={ele.st}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	);
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<ObcinaPageProps, { id: string }> = async ({ params }) => {
	const elementi: EleData[] | null = Elementi.some((ele) => ele[0] === params!.id)
		? Elementi.find((ele) => ele[0] === params!.id)![1]
				.map((val) => new URL(val))
				.map((val) => {
					const partsUrl = val.pathname.split('/');
					const partsEncoded = partsUrl[partsUrl.length - 1];
					// Backblaze se enkrat enkodira url
					const partsDecoded = decodeURIComponent(decodeURIComponent(partsEncoded));
					const parts = partsDecoded.split(',');

					return {
						href: val.href,
						naslov: parts[0],
						st: parts[1].replace(/.[^.]+$/, '')
					};
				})
		: null;

	return {
		props: {
			obcina: params!.id,
			// @ts-expect-error Magic
			obcinaIme: Obcine[params!.id],
			elementi
		},
		revalidate: 1
	};
};

export const computeSeznamObcin = () => {
	return Object.keys(Obcine).map((obcina) => ({
		params: {
			id: obcina
		}
	}));
};

export const getStaticPaths = () => {
	const paths = computeSeznamObcin();
	return {
		paths,
		fallback: false
	};
};

export default ObcinaPage;
