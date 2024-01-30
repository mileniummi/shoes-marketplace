import {StaticImageData} from 'next/image';

export interface IDrop {
    id: string;
    name: string;
    image: string | StaticImageData;
    floorPrice: number;
    isLive: boolean;
}
