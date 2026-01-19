import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import SportlaseHinnakiri from "@/pages/SportlaseHinnakiri";
import HarrastajaHinnakiri from "@/pages/HarrastajaHinnakiri";
import Hinnakiri from "@/pages/Hinnakiri";
import Kontakt from "@/pages/Kontakt";
import Minust from "@/pages/Minust";
import NotFound from "@/pages/not-found";
import Online from "./pages/Online";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/online" component={Online} />
      <Route path="/hinnakiri" component={Hinnakiri} />
      <Route path="/harrastaja-hinnakiri" component={HarrastajaHinnakiri} />
      <Route path="/sportlase-hinnakiri" component={SportlaseHinnakiri} />
      <Route path="/kontakt" component={Kontakt} />
      <Route path="/minust" component={Minust} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
