

import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';
import { costData } from '../constants';
import { CostData } from '../types';

const BarChart: React.FC<{ data: CostData[] }> = ({ data }) => {
    const [isVisible, setIsVisible] = useState(false);
    const chartRef = useRef<HTMLDivElement>(null);
    const USD_TO_INR_RATE = 83; // Approximate conversion rate for visualization

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.3 }
        );

        const currentRef = chartRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const maxChartValue = 350;
    const chartHeight = 350;
    const yAxisLabels = [0, 50, 100, 150, 200, 250, 300, 350];

    return (
        <div ref={chartRef} className="bg-dark-gray p-4 md:p-8 rounded-lg shadow-lg interactive-card">
            <div className="flex justify-center items-center space-x-6 mb-6">
                <div className="flex items-center">
                    <div className="w-4 h-4" style={{ backgroundColor: '#26c6da' }}></div>
                    <span className="text-sm text-light-slate ml-2">Mayank</span>
                </div>
                <div className="flex items-center">
                    <div className="w-4 h-4" style={{ backgroundColor: '#d9534f' }}></div>
                    <span className="text-sm text-light-slate ml-2">Industry</span>
                </div>
            </div>

            <div className="flex">
                <div className="flex items-center justify-center -rotate-90 transform -translate-x-4 md:-translate-x-6">
                    <span className="text-sm font-semibold text-slate whitespace-nowrap tracking-wider">Cost per Result (INR)</span>
                </div>
                <div className="w-full">
                    <div className="relative" style={{ height: `${chartHeight}px` }}>
                        {/* Y-Axis Grid Lines and Labels */}
                        {yAxisLabels.map(val => (
                            <div key={val} className="absolute w-full flex items-center" style={{ bottom: `${(val / maxChartValue) * chartHeight}px`, zIndex: 1 }}>
                                <span className="text-xs text-slate font-mono -ml-6 md:-ml-8">{val}</span>
                                <div className="w-full h-px bg-gray/30 ml-2"></div>
                            </div>
                        ))}
                        
                        <div className="absolute inset-0 flex justify-around items-end z-10 px-2">
                            {data.map((item, index) => {
                                const mayankCostNormalized = item.currency === '$' ? item.mayankCost * USD_TO_INR_RATE : item.mayankCost;
                                const industryCostNormalized = item.currency === '$' ? item.industryCost * USD_TO_INR_RATE : item.industryCost;

                                const mayankHeight = (mayankCostNormalized / maxChartValue) * chartHeight;
                                const industryHeight = (industryCostNormalized / maxChartValue) * chartHeight;
                                
                                return (
                                    <div key={index} className="flex flex-col items-center h-full w-1/3 group">
                                        <div className="flex-grow flex items-end justify-center gap-2 md:gap-4">
                                            {/* Mayank's Bar */}
                                            <div className="w-8 md:w-12 relative">
                                                 <div className={`absolute -top-10 left-1/2 -translate-x-1/2 text-xs font-bold text-lightest-slate transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} w-24 text-center`}>
                                                    {
                                                        item.currency === '₹'
                                                        ? <>
                                                            ₹{item.mayankCost.toFixed(2)}<br />
                                                            <span className="text-slate/70 font-normal text-[10px] leading-tight">(${(item.mayankCost / USD_TO_INR_RATE).toFixed(2)})</span>
                                                          </>
                                                        : <>
                                                            ${item.mayankCost.toFixed(2)}<br />
                                                            <span className="text-slate/70 font-normal text-[10px] leading-tight">(₹{(item.mayankCost * USD_TO_INR_RATE).toFixed(0)})</span>
                                                          </>
                                                    }
                                                 </div>
                                                 <div 
                                                    style={{ 
                                                        backgroundColor: '#26c6da',
                                                        height: isVisible ? `${mayankHeight}px` : '0px',
                                                        transition: `height 1s cubic-bezier(0.25, 1, 0.5, 1) ${index * 0.2}s`
                                                    }}
                                                 ></div>
                                            </div>
                                            {/* Industry Bar */}
                                            <div className="w-8 md:w-12 relative">
                                                <div className={`absolute -top-10 left-1/2 -translate-x-1/2 text-xs font-bold text-lightest-slate transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} w-24 text-center`}>
                                                    {
                                                        item.currency === '₹'
                                                        ? <>
                                                            ₹{item.industryCost.toFixed(0)}<br />
                                                            <span className="text-slate/70 font-normal text-[10px] leading-tight">(${(item.industryCost / USD_TO_INR_RATE).toFixed(2)})</span>
                                                          </>
                                                        : <>
                                                            ${item.industryCost.toFixed(1)}<br />
                                                            <span className="text-slate/70 font-normal text-[10px] leading-tight">(₹{(item.industryCost * USD_TO_INR_RATE).toFixed(0)})</span>
                                                          </>
                                                    }
                                                </div>
                                                <div 
                                                    style={{
                                                        backgroundColor: '#d9534f',
                                                        height: isVisible ? `${industryHeight}px` : '0px',
                                                        transition: `height 1s cubic-bezier(0.25, 1, 0.5, 1) ${index * 0.2 + 0.1}s`
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="text-center mt-3 text-sm text-slate">{item.campaignType}</div>
                                    </div>
                                );
                            })}
                        </div>
                         {/* X-axis line */}
                        <div className="absolute bottom-0 w-full h-px bg-slate/50"></div>
                    </div>
                    <div className="text-center mt-4 text-sm font-semibold text-slate tracking-wider">Campaign Type</div>
                </div>
            </div>
        </div>
    );
};

const CostEfficiency: React.FC = () => {
    const savings = [
        { label: 'B2B SAAS Lead Generation', value: '86%' },
        { label: 'Event Registrations', value: '75%' },
        { label: 'Multi-Platform Conversions', value: '72%' }
    ];

    return (
        <Section id="cost-efficiency" title="Cost Efficiency vs Industry">
            <div className="max-w-5xl mx-auto">
                <p className="text-center text-slate mb-4 max-w-3xl mx-auto section-hidden" style={{ transitionDelay: '100ms' }}>
                    A core focus of my strategy is maximizing ROI by significantly outperforming industry cost benchmarks. Below is a comparison of my campaign costs versus industry averages, demonstrating dramatic cost savings.
                </p>
                <p className="text-center text-xs text-slate/70 mb-12 max-w-3xl mx-auto italic section-hidden" style={{ transitionDelay: '200ms' }}>
                    Note: For a clearer visual comparison, USD values are converted to an approximate INR equivalent for charting purposes. Original values are displayed on each bar.
                </p>

                <div className="section-hidden" style={{ transitionDelay: '300ms' }}>
                  <BarChart data={costData} />
                </div>


                <div className="mt-16">
                    <h3 className="text-xl md:text-2xl font-bold text-lightest-slate text-center mb-8 section-hidden" style={{ transitionDelay: '100ms' }}>Key Takeaways: Massive Cost Savings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {savings.map((item, index) => (
                            <div key={index} className="interactive-card p-6 rounded-lg text-center section-hidden" style={{ transitionDelay: `${index * 150 + 200}ms` }}>
                                <div className="text-4xl font-bold text-teal mb-2">{item.value}</div>
                                <p className="text-slate text-sm">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default CostEfficiency;