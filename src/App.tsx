import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ResourcesPage from "./pages/ResourcesPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import StandardsPage from "./pages/StandardsPage";
import CoachingPage from "./pages/CoachingPage";
import ToolsPage from "./pages/ToolsPage";
import LinguaFlowArchitecturePage from "./pages/LinguaFlowArchitecturePage";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/standards" element={<StandardsPage />} />
          <Route path="/coaching" element={<CoachingPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/tools/linguaflow-architecture" element={<LinguaFlowArchitecturePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
