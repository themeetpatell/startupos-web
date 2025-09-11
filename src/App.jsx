import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import './App.css';
import { trackPageView } from './lib/utils';

// Components
import UltraNavigation from './components/UltraNavigation';
import UltraFooter from './components/UltraFooter';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import SolutionsPage from './pages/SolutionsPage';

// Solution Pages
import IdeaToMVP from './pages/solutions/IdeaToMVP';
import MVPtoPMF from './pages/solutions/MVPtoPMF';
import PMFtoScale from './pages/solutions/PMFtoScale';
import ScaleToExit from './pages/solutions/ScaleToExit';
import EcosystemPartners from './pages/solutions/EcosystemPartners';

// Feature Pages
import AICoBuilders from './pages/features/AICoBuilders';
import StageAwareGamification from './pages/features/StageAwareGamification';
import EcosystemAccess from './pages/features/EcosystemAccess';
import MergersAcquisition from './pages/features/MergersAcquisition';
import RealTimeAnalytics from './pages/features/RealTimeAnalytics';
import FractionalCXOs from './pages/features/FractionalCXOs';

// New Pages
import BlogPage from './pages/BlogPage';
import BlogArticlePage from './pages/BlogArticlePage';
import CareersPage from './pages/CareersPage';
import PartnersPage from './pages/PartnersPage';
import WebinarsPage from './pages/WebinarsPage';
import CaseStudyPage from './pages/CaseStudyPage';
import CoBuilderPlayground from './pages/CoBuilderPlayground';
import JobDetailPage from './pages/JobDetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import PersonalPage from './pages/PersonalPage';

// Component to track page views
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = document.title;
    const pageLocation = window.location.href;
    
    trackPageView(pageTitle, pageLocation);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App ultra-gradient-bg min-h-screen">
        <PageTracker />
        <UltraNavigation />
      
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        
        {/* Feature Pages */}
        <Route path="/features/ai-co-builders" element={<AICoBuilders />} />
        <Route path="/features/stage-aware-gamification" element={<StageAwareGamification />} />
        <Route path="/features/ecosystem-access" element={<EcosystemAccess />} />
        <Route path="/features/mergers-acquisition" element={<MergersAcquisition />} />
        <Route path="/features/real-time-analytics" element={<RealTimeAnalytics />} />
        <Route path="/features/fractional-cxos" element={<FractionalCXOs />} />
        
        {/* Blog Pages */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
        
        {/* New Pages */}
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/webinars" element={<WebinarsPage />} />
        <Route path="/co-builder-playground" element={<CoBuilderPlayground />} />
        
        {/* Template Pages - Add these as needed */}
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsOfServicePage />} />
              <Route path="/cookies" element={<CookiePolicyPage />} />
        <Route path="/jobs/:id" element={<JobDetailPage />} />
        
        {/* Solution Pages */}
        <Route path="/solutions/idea-to-mvp" element={<IdeaToMVP />} />
        <Route path="/solutions/mvp-to-pmf" element={<MVPtoPMF />} />
        <Route path="/blog/:id" element={<BlogArticlePage />} />
        <Route path="/solutions/scale-to-exit" element={<ScaleToExit />} />
        <Route path="/solutions/ecosystem" element={<EcosystemPartners />} />
        
        {/* Resource Pages - Add these as needed */}
        <Route path="/case-studies" element={<CaseStudyPage />} />
        <Route path="/docs" element={<div className="min-h-screen pt-16 ultra-gradient-bg flex items-center justify-center"><h1 className="text-4xl font-bold text-white">Documentation</h1></div>} />
        
        {/* Company Pages - Add these as needed */}
        <Route path="/press" element={<div className="min-h-screen pt-16 ultra-gradient-bg flex items-center justify-center"><h1 className="text-4xl font-bold text-white">Press</h1></div>} />
        <Route path="/api" element={<div className="min-h-screen pt-16 ultra-gradient-bg flex items-center justify-center"><h1 className="text-4xl font-bold text-white">API Reference</h1></div>} />
        
        {/* Personal Pages */}
        <Route path="/meet" element={<PersonalPage />} />
      </Routes>
      
        <UltraFooter />
        <Analytics />
        </div>
      </Router>
  );
}

export default App;

