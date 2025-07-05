import React from 'react';
import { Skill, ExperienceItem, EducationItem, Campaign } from './types';
import { MarketingIcon, TechnicalIcon, LeadershipIcon, SoftSkillsIcon } from './components/Icons';

export const skillsData: { category: string; icon: React.ReactNode; items: string[] }[] = [
  {
    category: "Marketing",
    icon: <MarketingIcon />,
    items: ["Digital Campaign Management", "Social Media Content Strategy", "SEO", "Audience Persona Development"]
  },
  {
    category: "Technical",
    icon: <TechnicalIcon />,
    items: ["Google Analytics", "HubSpot", "Zapier", "ManyChat", "SEMrush", "Wix", "Make.com"]
  },
  {
    category: "Leadership",
    icon: <LeadershipIcon />,
    items: ["Team Management", "Strategic Planning", "Conflict Resolution", "Decision-Making"]
  },
  {
    category: "Soft Skills",
    icon: <SoftSkillsIcon />,
    items: ["Professional Communication", "Time Management", "Adaptability", "Analytical Problem-Solving"]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    company: "The Growin Wolf",
    role: "Co-founder",
    duration: "June 2020 - February 2025",
    points: [
      "Spearheaded strategic and operational growth of a digital marketing agency, achieving consistent profitability over 4+ years through data-driven campaigns and process optimization.",
      "Developed audience personas using market research, boosting client retention by 20% and increasing engagement rates by 15%; crafted strategies spanning content, automation, and Wix-based website development.",
      "Designed and implemented 150+ marketing audits, prompt engineering solutions, and SOPs, improving client performance metrics (e.g., 25% average increase in conversion rates).",
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
        title: "Facebook Lead Generation",
        description: "A successful lead generation campaign on Facebook focusing on cost-effective results.",
        metrics: [
            { label: "On-Facebook leads", value: "197" },
            { label: "Cost per On-Facebook lead", value: "₹42.64" },
            { label: "Amount spent", value: "₹8,400.00" },
            { label: "Reach", value: "12,356" },
            { label: "Impressions", value: "30,161" },
            { label: "Purchase ROAS", value: "0.00" },
            { label: "CPC (cost per link click)", value: "₹23.93" },
        ],
        imageSrc: "https://placehold.co/800x600/0a192f/64ffda/png?text=Facebook+Leads"
    },
    {
        id: 2,
        title: "Messaging Conversion Campaigns",
        description: "Overview of multiple messaging conversion campaigns demonstrating consistent performance.",
        metrics: [
            { label: "Campaign 1 Results", value: "143 conversions" },
            { label: "Campaign 2 Cost/Result", value: "$1.04" },
            { label: "Campaign 3 Reach", value: "330,702" },
            { label: "Campaign 4 Impressions", value: "821,522" },
            { label: "Campaign 5 Cost/Result", value: "$0.95" },
            { label: "Campaign 6 Amount Spent", value: "$558.28" },
        ],
        imageSrc: "https://placehold.co/800x600/0a192f/64ffda/png?text=Messaging+Campaigns"
    },
    {
        id: 3,
        title: "Viral Instagram Reel",
        description: "A highly successful viral video on Instagram that garnered massive engagement.",
        metrics: [
            { label: "Likes", value: "318K" },
            { label: "Comments", value: "901" },
            { label: "Shares", value: "279K" },
            { label: "Views", value: "10M+" },
            { label: "Followers Gained", value: "4000+" },
        ],
        imageSrc: "https://placehold.co/800x600/0a192f/64ffda/png?text=Viral+Instagram+Reel"
    },
     {
        id: 4,
        title: "Registration Campaigns",
        description: "Performance metrics for user registration campaigns, optimizing for cost per complete registration.",
        metrics: [
            { label: "Campaign 1 Cost/Result", value: "₹16.93" },
            { label: "Campaign 1 Amount Spent", value: "₹406.28" },
            { label: "Campaign 2 Cost/Result", value: "₹21.06" },
            { label: "Campaign 2 Amount Spent", value: "₹400.05" },
        ],
        imageSrc: "https://placehold.co/800x600/0a192f/64ffda/png?text=Registration+Campaigns"
    },
];