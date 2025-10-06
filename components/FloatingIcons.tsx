import React from 'react';
import { FigmaIcon, GoogleAnalyticsIcon, MetaIcon, GoogleAdsIcon, MailchimpIcon, ZapierIcon, HubspotIcon, SEMrushIcon } from './Icons';

const icons = [
  { Icon: GoogleAdsIcon, style: { top: '15%', left: '10%', animation: 'float-diag-1 12s ease-in-out infinite' }, size: 'w-10 h-10 md:w-16 md:h-16' },
  { Icon: GoogleAnalyticsIcon, style: { top: '25%', left: '85%', animation: 'float-diag-2 15s ease-in-out infinite' }, size: 'w-8 h-8 md:w-12 md:h-12' },
  { Icon: MetaIcon, style: { top: '50%', left: '5%', animation: 'float-diag-2 18s ease-in-out infinite' }, size: 'w-12 h-12 md:w-20 md:h-20' },
  { Icon: ZapierIcon, style: { top: '80%', left: '90%', animation: 'float-diag-1 14s ease-in-out infinite' }, size: 'w-9 h-9 md:w-14 md:h-14' },
  { Icon: SEMrushIcon, style: { top: '65%', left: '20%', animation: 'float-diag-1 16s ease-in-out infinite' }, size: 'w-8 h-8 md:w-12 md:h-12' },
  { Icon: HubspotIcon, style: { top: '90%', left: '15%', animation: 'float-diag-2 13s ease-in-out infinite' }, size: 'w-10 h-10 md:w-16 md:h-16' },
  { Icon: FigmaIcon, style: { top: '5%', left: '50%', animation: 'float-diag-1 17s ease-in-out infinite' }, size: 'w-7 h-7 md:w-10 md:h-10' },
  { Icon: MailchimpIcon, style: { top: '75%', left: '60%', animation: 'float-diag-2 11s ease-in-out infinite' }, size: 'w-9 h-9 md:w-14 md:h-14' },
];

const FloatingIcons: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none" aria-hidden="true">
      {icons.map(({ Icon, style, size }, index) => (
        <div key={index} className={`floating-icon ${size}`} style={style}>
          <Icon />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;