import React, { Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

// Lazy load components for better initial load performance
const Index = React.lazy(() => import("./pages/Index"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const OilChangeService = React.lazy(() => import("./pages/OilChangeService"));
const Appointment = React.lazy(() => import("./pages/Appointment"));
const Services = React.lazy(() => import("./pages/Services"));
const Resources = React.lazy(() => import("./pages/Resources"));
const Locations = React.lazy(() => import("./pages/Locations"));
const About = React.lazy(() => import("./pages/About"));
const ChatWidget = React.lazy(() => import("./components/ChatWidget"));

// Configure React Query with performance optimizations
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Data considered fresh for 5 minutes
      retry: 1, // Only retry failed requests once
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/oil-change" element={<OilChangeService />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:locationId" element={<Locations />} />
            <Route path="/about" element={<About />} />
            {/* Additional routes would be added here when those pages are created */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChatWidget />
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
