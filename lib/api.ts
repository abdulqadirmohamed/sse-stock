// lib/api.ts - Centralized API logic
import { TMarket } from '@/types/types';

export const getMarketSnapshot = async (): Promise<TMarket[] | null> => {
    try {
        const res = await fetch(`${process.env.API_URL}/api/market-snapshots?populate=*`, {
            next: { revalidate: 60 }, // Revalidate every 60 seconds
            cache: 'no-store', // Ensure fresh data on each request
        });

        if (res.ok) {
            const market = await res.json();
            return market.data;
        } else {
            console.error('Failed to fetch market data:', res.statusText);
            return null;
        }
    } catch (error) {
        console.error('Error fetching market:', error);
        return null;
    }
};
