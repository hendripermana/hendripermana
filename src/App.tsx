import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import { ProfileData, Project } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BioSection } from './components/BioSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeViewerModal } from './components/ResumeViewerModal';
import { EditProfileModal } from './components/EditProfileModal';
import { Footer } from './components/Footer';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('portfolio_profile_data');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return initialPortfolioData;
  });

  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const selectedProject = profile.projects.find((p) => p.id === selectedProjectId) || null;

  const handleSaveProfile = (updatedProfile: ProfileData) => {
    setProfile(updatedProfile);
    try {
      localStorage.setItem('portfolio_profile_data', JSON.stringify(updatedProfile));
    } catch (err) {
      console.error('Failed to persist profile', err);
    }
  };

  const handleResetProfile = () => {
    setProfile(initialPortfolioData);
    try {
      localStorage.removeItem('portfolio_profile_data');
    } catch (err) {
      console.error('Failed to reset profile', err);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-emerald-500/20 selection:text-emerald-300 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Fixed Header */}
      <Navbar
        profile={profile}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenEdit={() => setIsEditOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
          onSelectProject={(id) => setSelectedProjectId(id)}
        />

        {/* 2. Biography & Engineering Philosophy */}
        <BioSection
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 3. Featured Projects Showcase */}
        <ProjectsSection
          projects={profile.projects}
          onSelectProject={(id) => setSelectedProjectId(id)}
        />

        {/* 4. Skills & Technical Stack Breakdown */}
        <SkillsSection
          skills={profile.skills}
        />

        {/* 5. Work Experience & Education Timeline */}
        <ExperienceSection
          experiences={profile.experiences}
          education={profile.education}
        />

        {/* 6. Testimonials & Recommendations */}
        <TestimonialsSection
          testimonials={profile.testimonials}
        />

        {/* 7. Direct Contact Form & Professional Profiles */}
        <ContactSection
          profile={profile}
        />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />

      <ResumeViewerModal
        profile={profile}
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <EditProfileModal
        profile={profile}
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onSave={handleSaveProfile}
        onReset={handleResetProfile}
      />
    </div>
  );
}
