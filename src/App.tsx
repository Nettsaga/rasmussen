import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Oppforing from "./pages/Oppforing";
import Rehabilitering from "./pages/Rehabilitering";
import ServiceOgSmajobber from "./pages/ServiceOgSmajobber";
import Contact from "./pages/Contact";
import References from "./pages/References";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import { useScrollToTop } from "./hooks/use-scroll-to-top";

const queryClient = new QueryClient();

const AppRoutes = () => {
  useScrollToTop();
  
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tjenester" element={<Services />} />
        <Route path="/tjenester/oppforing" element={<Oppforing />} />
        <Route path="/tjenester/service-og-smajobber" element={<ServiceOgSmajobber />} />
        <Route path="/tjenester/rehabilitering" element={<Rehabilitering />} />
        <Route path="/referanser" element={<References />} />
            <Route path="/ansatte" element={<Team />} />
        <Route path="/kontakt" element={<Contact />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
