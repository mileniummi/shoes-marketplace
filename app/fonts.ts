import {Raleway} from 'next/font/google';

export const RalewayFont = Raleway({
    subsets: ['latin', 'cyrillic'],
    weight: ['100', '300', '400', '500', '600', '700', '900'],
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});
