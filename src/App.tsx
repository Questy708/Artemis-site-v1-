import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Platform } from "./pages/Platform";
import { Ventures } from "./pages/Ventures";
import { VentureDetail } from "./pages/VentureDetail";
import { Programs } from "./pages/Programs";
import { ProgramDetail } from "./pages/ProgramDetail";
import { RoutesPage } from "./pages/RoutesPage";
import { Manifesto } from "./pages/Manifesto";
import { Approach } from "./pages/Approach";
import { Insights } from "./pages/Insights";
import { InsightDetail } from "./pages/InsightDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="manifesto" element={<Manifesto />} />
          <Route path="approach" element={<Approach />} />
          <Route path="platform" element={<Platform />} />
          <Route path="programs" element={<Programs />} />
          <Route path="programs/:id" element={<ProgramDetail />} />
          <Route path="ventures" element={<Ventures />} />
          <Route path="ventures/:id" element={<VentureDetail />} />
          <Route path="routes" element={<RoutesPage />} />
          <Route path="insights" element={<Insights />} />
          <Route path="insights/:id" element={<InsightDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
