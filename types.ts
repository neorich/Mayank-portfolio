
import React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  points: string[];
  achievements: { title: string; description: string; }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  details?: string;
}

export interface Campaign {
  id: number;
  title: string;
  description:string;
  metrics: { label: string; value: string; }[];
  imageSrc: string;
}

export interface CostData {
  campaignType: string;
  mayankCost: number;
  industryCost: number;
  currency: '₹' | '$';
}