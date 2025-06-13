import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage'; // This is the main /services list page
import ContactPage from './pages/ContactPage';
import ScrollToTop from './utils/ScrollToTop';

// Import the new individual service pages
import DataAnalysisPage from './pages/Services/DataAnalysisPage';
import CreativeDesignPage from './pages/Services/CreativeDesignPage';
import AiMlProjectsPage from './pages/Services/AiMlProjectsPage';
import AcademicConsultationPage from './pages/Services/AcademicConsultationPage';

const NotFoundPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
    <p className="text-2xl text-gray-700 mb-8">Oops! Page Not Found.</p>
    <a href="/" className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition">
      Go Back Home
    </a>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          
          {/* Main services listing page */}
          <Route path="services" element={<ServicesPage />} /> 
          
          {/* Individual service detail pages */}
          <Route path="services/data-analysis" element={<DataAnalysisPage />} />
          <Route path="services/creative-design" element={<CreativeDesignPage />} />
          <Route path="services/ai-ml-projects" element={<AiMlProjectsPage />} />
          <Route path="services/academic-consultation" element={<AcademicConsultationPage />} />
          
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;