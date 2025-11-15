import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceCAD from "@/pages/ServiceCAD";
import ServiceMechanicalCAD from "@/pages/ServiceMechanicalCAD";
import ServiceFEACFD from "@/pages/ServiceFEACFD";
import Service3DPrinting from "@/pages/Service3DPrinting";
import ServicePCBDesign from "@/pages/ServicePCBDesign";
import ServiceMATLAB from "@/pages/ServiceMATLAB";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import Auth from "@/pages/Auth";
import RequestQuote from "@/pages/RequestQuote";
import Buying from "@/pages/Buying";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingOrbs from "@/components/FloatingOrbs";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/services/cad" component={ServiceCAD} />
        <Route path="/services/mechanical-cad" component={ServiceMechanicalCAD} />
        <Route path="/services/fea-cfd" component={ServiceFEACFD} />
        <Route path="/services/3d-printing" component={Service3DPrinting} />
        <Route path="/services/pcb-design" component={ServicePCBDesign} />
        <Route path="/services/matlab" component={ServiceMATLAB} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/request-quote" component={RequestQuote} />
        <Route path="/buying" component={Buying} />
        <Route path="/auth" component={Auth} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative min-h-screen bg-background text-foreground">
          <FloatingOrbs />
          <div className="relative z-10">
            <Header />
            <main>
              <Router />
            </main>
            <Footer />
          </div>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
