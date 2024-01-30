import {Banners} from '@/components/landing/banners/landing-banners';
import {LandingActions} from '@/components/landing/actions/actions';
import {SolanaAdvertisingBanner} from '@/components/landing/solana-advertising-banner/solana-advertising-banner';
import {NotableDrops} from '@/components/landing/notable-drops/notable-drops';

// eslint-disable-next-line import/no-default-export
export default function Home() {
    return (
        <main>
            <Banners />
            <LandingActions />
            <SolanaAdvertisingBanner />
            <NotableDrops />
        </main>
    );
}
