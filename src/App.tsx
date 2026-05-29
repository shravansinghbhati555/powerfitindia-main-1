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
import CollectionPage from "./pages/shop/CollectionPage.tsx";
import SearchPage from "./pages/shop/SearchPage.tsx";
import ProductPage from "./pages/shop/ProductPage.tsx";
import BlogPage from "./pages/blog/BlogPage.tsx";
import ArticlePage from "./pages/blog/ArticlePage.tsx";
import ShopifyPageRenderer from "./pages/ShopifyPageRenderer.tsx";
import FranchisePage from "./pages/FranchisePage.tsx";
import GymSetupPage from "./pages/GymSetupPage.tsx";
import Programs from "./pages/Programs.tsx";
import ProgramDetailPage from "./pages/programs/detail/ProgramDetailPage.tsx";
import StrengthPage from "./pages/programs/StrengthPage.tsx";
import CardioPage from "./pages/programs/CardioPage.tsx";
import MindBodyPage from "./pages/programs/MindBodyPage.tsx";
import SpecialtyPage from "./pages/programs/SpecialtyPage.tsx";
import OnlinePage from "./pages/programs/OnlinePage.tsx";
import NotFound from "./pages/NotFound.tsx";
import MembershipPage from "./pages/MembershipPage.tsx";
import GymsPage from "./pages/GymsPage.tsx";
import PrivacyPolicyPage from "./pages/legal/PrivacyPolicyPage.tsx";
import TermsConditionsPage from "./pages/legal/TermsConditionsPage.tsx";
import ScrollToHash from "./components/ScrollToHash.tsx";
import GlobalSEO from "./components/GlobalSEO.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      refetchOnWindowFocus: false,
    },
  },
});

const AppContent = () => {
  useCartSync();
  return (
    <>
      <GlobalSEO />
      <ScrollToHash />
      <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/shop/:collectionHandle" element={<CollectionPage />} />
      {/* Legacy product route */}
      <Route path="/product/:handle" element={<ProductDetailPage />} />
      {/* Headless commerce canonical product route */}
      <Route path="/products/:productHandle" element={<ProductPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:blogHandle" element={<BlogPage />} />
      <Route path="/blog/:blogHandle/:articleHandle" element={<ArticlePage />} />

      {/* Shopify pages */}
      <Route path="/about" element={<ShopifyPageRenderer handle="about-us" />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-conditions" element={<TermsConditionsPage />} />
      <Route path="/franchise" element={<FranchisePage />} />
      <Route path="/gym-setup" element={<GymSetupPage />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/programs/strength" element={<StrengthPage />} />
      <Route path="/programs/cardio" element={<CardioPage />} />
      <Route path="/programs/mind-body" element={<MindBodyPage />} />
      <Route path="/programs/specialty" element={<SpecialtyPage />} />
      <Route path="/programs/online" element={<OnlinePage />} />
      <Route path="/program/:slug" element={<ProgramDetailPage />} />
      <Route path="/membership" element={<MembershipPage />} />
      <Route path="/gyms" element={<GymsPage />} />

      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
      </Routes>
    </>
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

