import { Obcine } from './Obcine';

export enum Grbi {
	Maribor = 'maribor.svg',
	Benedikt = 'benedikt.svg',
	Cerkvenjak = 'cerkvenjak.svg',
	Duplek = 'duplek.svg',
	HoceSlivnica = 'hoce-slivnica.svg',
	Kungota = 'kungota.svg',
	Lenart = 'lenart.svg',
	LovrencNaPohorju = 'lovrenc-na-pohorju.svg',
	MiklavzNaDravskemPolju = 'miklavz-na-dravskem-polju.svg'
}

export const computeGrb = (obcina: Obcine) => {
	// @ts-expect-error Magic
	return Grbi[Obcine[obcina]] as Grbi | undefined;
};
