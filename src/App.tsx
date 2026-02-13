import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import Home from "./components/home";
import Terms from "./components/terms";
import Privacy from "./components/privacy";
import DataDeletion from "./components/datadeletion";
import Cookies from "./components/cookies";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/datadeletion" element={<DataDeletion />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
        <Toaster position="top-right" richColors />
        <Analytics />
      </>
    </Suspense>
  );
}

export default App;
