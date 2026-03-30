import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useCartSync } from "@/hooks/useCartSync";
import Index from "./pages/Index.tsx";
import ShopPage from "./pages/ShopPage.tsx";
import ProductDetailPage from "./pages/ProductDetailPage.tsx";
import FranchisePage from "./pages/FranchisePage.tsx";
import GymSetupPage from "./pages/GymSetupPage.tsx";
import Programs from "./pages/Programs.tsx";
import ProgramDetailPage from "./pages/ProgramDetailPage.tsx"
import StrengthPage from "./pages/programs/StrengthPage.tsx";
import CardioPage from "./pages/programs/CardioPage.tsx";
import MindBodyPage from "./pages/programs/MindBodyPage.tsx";
import SpecialtyPage from "./pages/programs/SpecialtyPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const AppContent = () => {
  useCartSync();
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/product/:handle" element={<ProductDetailPage />} />
      <Route path="/franchise" element={<FranchisePage />} />
      <Route path="/gym-setup" element={<GymSetupPage />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/programs/strength" element={<StrengthPage />} />
      <Route path="/programs/cardio" element={<CardioPage />} />
      <Route path="/programs/mind-body" element={<MindBodyPage />} />
      <Route path="/programs/specialty" element={<SpecialtyPage />} />
      <Route path="/programs/detail/:slug" element={<ProgramDetailPage />} />

      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
