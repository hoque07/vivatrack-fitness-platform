import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Analytics from "./pages/Analytics";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Features from "./pages/Features";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import ProgramDetails from "./pages/ProgramDetails";
import Programs from "./pages/Programs";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:programId" element={<ProgramDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/community" element={<Community />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}