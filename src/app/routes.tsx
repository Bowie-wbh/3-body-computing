import React from "react";
import { createBrowserRouter } from "react-router";
import ConstellationPage from "./pages/ConstellationPage";
import IntroPage from "./pages/IntroPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import AuthPage from "./pages/AuthPage";
import CastPage from "./pages/CastPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminPage from "./pages/AdminPage";
import ITUChallengeDetailPage from "./pages/ITUChallengeDetailPage";
import OliveLeafPlanPage from "./pages/OliveLeafPlanPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ConstellationPage />,
  },
  {
    path: "/intro",
    element: <IntroPage />,
  },
  {
    path: "/constellation",
    element: <ConstellationPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/admin-login",
    element: <AdminLoginPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/cast",
    element: <CastPage />,
  },
  {
    path: "/itu-challenge",
    element: <ITUChallengeDetailPage />,
  },
  {
    path: "/olive-leaf-plan",
    element: <OliveLeafPlanPage />,
  },
  {
    path: "*",
    element: <ConstellationPage />,
  },
]);