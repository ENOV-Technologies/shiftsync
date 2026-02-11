import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Home from "./components/home";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Toaster position="top-right" richColors />
      </>
    </Suspense>
  );
}

export default App;
