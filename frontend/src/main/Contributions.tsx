import React from 'react';
import { contributionsData } from './data/contributionsData';
import { ContributionCard } from './components/ContributionCard';

export const Contributions: React.FC = () => {
    return (
        <div className="p-6 space-y-8">
            <h2 className="text-2xl font-bold text-white mb-6">오픈소스 기여</h2>
            <div className="grid gap-6">
                {contributionsData.map((contribution, index) => (
                    <ContributionCard key={index} contribution={contribution} />
                ))}
            </div>
        </div>
    );
}; 