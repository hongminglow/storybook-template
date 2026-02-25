import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { Layout } from "@/components/storybook/Layout";
import { ComponentPage } from "@/pages/ComponentPage";
import { getComponentConfig, componentConfigs } from "@/data/components";

function ComponentRoute() {
  const { componentId } = useParams();
  const config = getComponentConfig(componentId || "");

  if (!config) {
    return <div>Component not found</div>;
  }

  // Use config.id as key to force remount of ComponentPage when navigating.
  // This is the cleanest way to reset state (propsState) for each unique component.
  return <ComponentPage key={config.id} config={config} />;
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to={`/${componentConfigs[0].id}`} replace />} />
            <Route path=":componentId" element={<ComponentRoute />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
