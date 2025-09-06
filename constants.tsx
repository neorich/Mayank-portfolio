

import React from 'react';
import { Skill, ExperienceItem, EducationItem, Campaign, CostData } from './types';
import { MarketingIcon, TechnicalIcon, LeadershipIcon, SoftSkillsIcon } from './components/Icons';

export const skillsData: { category: string; icon: React.ReactNode; items: string[] }[] = [
  {
    category: "Marketing",
    icon: <MarketingIcon />,
    items: ["Digital Campaign Management", "Social Media Strategy", "SEO", "Audience Persona Development", "Content Strategy", "Brand Positioning", "Lead Generation"]
  },
  {
    category: "AI & Technical",
    icon: <TechnicalIcon />,
    items: ["Prompt Engineering", "VEO 3", "Automation Workflows with AI", "Google Analytics", "HubSpot", "SEMrush", "Zapier", "Make.com", "ManyChat", "Wix", "Google Flow"]
  },
  {
    category: "Leadership",
    icon: <LeadershipIcon />,
    items: ["Team Management", "Strategic Planning", "Growth Strategy", "Conflict Resolution", "Decision-Making"]
  },
  {
    category: "Soft Skills",
    icon: <SoftSkillsIcon />,
    items: ["Professional Communication", "Adaptability", "Time Management", "Creative Problem-Solving"]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    company: "Disrupt Studios",
    role: "Fractional Marketing Director & Strategic Growth Advisor",
    duration: "Mar 2025 - Present",
    points: [
      "Implemented AI enablement across market research, rapid content iteration, and campaign creation, accelerating strategy cycles and reducing go-to-market time by 30%.",
      "Advised leadership on revenue optimization strategy, including targeting high-value business segments, refining offer positioning, and structuring pricing, contributing to a 50% improvement in predictable cash flow.",
      "Established a data-driven performance framework that enabled the rapid creation of high-performing ads, driving significantly higher engagement rates across studio-led initiatives.",
      "Guided the integration of scalable creative workflows, ensuring consistency and efficiency as the studio expanded.",
      "Served as a strategic growth advisor, shaping not only marketing execution but also business direction and operational scalability."
    ],
    achievements: []
  },
  {
    company: "The Growin Wolf",
    role: "Co-founder",
    duration: "June 2020 - February 2025",
    points: [
      "Spearheaded strategic and operational growth of a digital marketing agency, achieving consistent profitability over 4+ years through data-driven campaigns and process optimization.",
      "Developed audience personas using market research for clients, boosting client retention by 20% and increasing engagement rates by 15%; crafted strategies spanning content, automation, and Wix-based website development.",
      "Designed and implemented 150+ marketing audits, prompt engineering solutions, and SOPs, improving client performance metrics (e.g., 25% average increase in conversion rates) across industries like e-commerce and SaaS.",
      "Optimized operations by integrating automation tools (e.g., Zapier, ManyChat, make.com), reducing turnaround time by 20% and enhancing team productivity.",
      "Led a team of 15+ professionals, aligning efforts with business objectives and fostering a 95% project delivery success rate."
    ],
    achievements: [
        { title: "Viral Campaign Success", description: "Conceived and executed a viral Instagram Reel campaign, achieving 10M+ views and 4000+ followers in 15 days through an innovative content strategy without AI tools." },
        { title: "AI-Driven ROI Improvement", description: "Pioneered AI-driven marketing audits, resulting in 18% average ROI improvement for clients in diverse sectors." },
        { title: "Team Building", description: "Built a 15-member team from scratch, recruiting and training talent to deliver high-impact marketing campaigns." },
        { title: "Operational Efficiency", description: "Developed comprehensive systems and procedures, increasing operational efficiency by 35% and ensuring scalability." },
    ]
  }
];

export const educationData: EducationItem[] = [
    { degree: "Bachelor of Computer Applications (BCA)", institution: "Bilaspur University, C.G." },
    { degree: "Introduction to Generative AI", institution: "Google Cloud" },
    { degree: "AI Powered Marketer", institution: "SEMrush" },
    { degree: "Advanced Prompt Engineering Techniques", institution: "Codesignal" },
    { degree: "Generative AI for Executives", institution: "Amazon (AWS) Skill Builder" },
    { degree: "Generative AI in Action", institution: "Amazon (AWS) Skill Builder" },
    { degree: "Digital Marketing", institution: "Hubspot Academy" }
];


export const campaignData: Campaign[] = [
    {
        id: 1,
        title: "SAAS Lead Gen for Shipping Aggregator",
        description: "Executed a high-intent lead generation campaign for a B2B SAAS client. Focused on acquiring Marketing Qualified Leads (MQLs) by targeting logistics managers and e-commerce business owners on Facebook.",
        metrics: [
            { label: "On-Facebook leads", value: "197" },
            { label: "Cost per MQL", value: "₹42.64" },
            { label: "Amount spent", value: "₹8,400.00" },
            { label: "Targeted Reach", value: "12,356" },
            { label: "Impressions", value: "30,161" },
            { label: "CPC (cost per link click)", value: "₹23.93" },
        ],
        imageSrc: "https://github.com/neorich/files/blob/main/Saas%20Leads.png?raw=true"
    },
    {
        id: 4,
        title: "Event Registration Drive",
        description: "Spearheaded a registration drive for a client's flagship online event. The campaign successfully generated sign-ups from a targeted professional audience, ensuring high attendance rates at a minimal cost.",
        metrics: [
            { label: "Complete Registrations", value: "48" },
            { label: "Cost/Complete Registration", value: "₹18.88 (Blended)" },
            { label: "Campaign 1 Cost/Result", value: "₹16.93" },
            { label: "Campaign 2 Cost/Result", "value": "₹21.06" },
            { label: "Total Amount Spent", value: "₹806.33" },
        ],
        imageSrc: "https://github.com/neorich/files/blob/main/Event.jpg?raw=true"
    },
    {
        id: 3,
        title: "The Viral Cat Meme Reel",
        description: "Engineered a viral phenomenon with a cleverly simple cat meme. The reel captured the internet's heart, organically reaching over 10 million views and skyrocketing follower growth in just two weeks.",
        metrics: [
            { label: "Views", value: "10M+" },
            { label: "Likes", value: "318K" },
            { label: "Shares", value: "279K" },
            { label: "Followers Gained", value: "4000+" },
            { label: "Comments", value: "901" },
        ],
        imageSrc: "https://github.com/neorich/files/blob/main/Viralmeme.Instagram.png?raw=true"
    },
    {
        id: 2,
        title: "Multi-Platform Messaging Conversions",
        description: "Managed a series of direct-response campaigns across WhatsApp and Messenger, optimizing for immediate user engagement and conversions. Consistently achieved a low cost-per-result across diverse audiences.",
        metrics: [
            { label: "Total Conversions", value: "450+" },
            { label: "Avg. Cost per Conversion", value: "$0.98" },
            { label: "Total Reach", value: "330,702" },
            { label: "Total Impressions", value: "821,522" },
            { label: "Campaign 1 Conversions", value: "143" },
            { label: "Campaign 2 Cost/Result", value: "$1.04" },
        ],
        imageSrc: "https://github.com/neorich/files/blob/main/multiplatform.jpg?raw=true"
    }
];

export const costData: CostData[] = [
  { campaignType: 'B2B Leads', mayankCost: 42.64, industryCost: 310, currency: '₹' },
  { campaignType: 'Event Reg', mayankCost: 18.88, industryCost: 75, currency: '₹' },
  { campaignType: 'Multi-Platform', mayankCost: 0.98, industryCost: 3.5, currency: '$' },
];