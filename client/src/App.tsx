import { Switch, Route, useLocation, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingOrbs from "@/components/FloatingOrbs";
import ScrollToTopButton from "@/components/ScrollToTopButton";

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
        <Route path="/about" component={About} />
        <Route path="/services" component={() => <Redirect to="/services/mechanical-cad" />} />
        <Route path="/services/:serviceId" component={Services} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  const [location] = useLocation();
  const isAuthPage = location === '/login' || location === '/signup';

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative min-h-screen bg-background text-foreground">
          {!isAuthPage && <FloatingOrbs />}
          <div className="relative z-10">
            {!isAuthPage && <Header />}
            <main>
              <Router />
            </main>
            {!isAuthPage && <Footer />}
          </div>
          <ScrollToTopButton />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
