import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { lazy, Suspense } from "react";

// Layouts
const CommonLayout = lazy(() => import("@/components/layouts/CommonLayout"));
const RootLayout = lazy(() => import("@/components/layouts/RootLayout"));
const HomePage = lazy(() => import("@/pages/(common)/HomePage"));

// Partials Pages
const ErrorPage = lazy(() => import("@/pages/(partials)/ErrorPage"));

// Common Pages
const About = lazy(() => import("@/pages/(common)/About"));
const Contact = lazy(() => import("@/pages/(common)/Contact"));
const Aesthetic = lazy(() => import("@/pages/(common)/Services/Aesthetic"));
const AestheticClinic = lazy(() => import("@/pages/(common)/Services/AestheticClinic"));
const Concierge = lazy(() => import("@/pages/(common)/Services/Concierge"));
const ConciergeService = lazy(() => import("@/pages/(common)/Services/ConciergeService"));
const OneGp = lazy(() => import("@/pages/(common)/Services/OneGp"));
const PrivateGp = lazy(() => import("@/pages/(common)/Services/PrivateGp"));
const PrivacyPolicy = lazy(() => import("@/pages/(common)/PrivacyPolicy"));
const Terms = lazy(() => import("@/pages/(common)/Terms"));

export const routes = [
  {
    path: "/",
    element: <Suspense fallback={<LoadingSpinner />}><RootLayout /></Suspense>,
    errorElement: <Suspense fallback={<LoadingSpinner />}><ErrorPage /></Suspense>,
    children: [
      {
        element: <Suspense fallback={<LoadingSpinner />}><CommonLayout /></Suspense>,
        children: [
          {
            index: true,
            element: <Suspense fallback={<LoadingSpinner />}><HomePage /></Suspense>,
          },
          {
            path: "private_gp_clinic",
            element: <Suspense fallback={<LoadingSpinner />}><PrivateGp /></Suspense>,
          },
          {
            path: "contact",
            element: <Suspense fallback={<LoadingSpinner />}><Contact /></Suspense>,
          },
          {
            path: "about",
            element: <Suspense fallback={<LoadingSpinner />}><About /></Suspense>,
          },
          {
            path: "terms",
            element: <Suspense fallback={<LoadingSpinner />}><Terms /></Suspense>,
          },
          {
            path: "privacy-policy",
            element: <Suspense fallback={<LoadingSpinner />}><PrivacyPolicy /></Suspense>,
          },
          {
            path: "private_gp_clinic/:slug",
            element: <Suspense fallback={<LoadingSpinner />}><OneGp /></Suspense>,
          },
          {
            path: "aesthetic_clinic",
            element: <Suspense fallback={<LoadingSpinner />}><AestheticClinic /></Suspense>,
          },
          {
            path: "aesthetic_clinic/:slug",
            element: <Suspense fallback={<LoadingSpinner />}><Aesthetic /></Suspense>,
          },
          {
            path: "concierge_service",
            element: <Suspense fallback={<LoadingSpinner />}><ConciergeService /></Suspense>,
          },
          {
            path: "concierge_service/:id",
            element: <Suspense fallback={<LoadingSpinner />}><Concierge /></Suspense>,
          },
          {
            path: "privacy-policy",
            element: <Suspense fallback={<LoadingSpinner />}><PrivacyPolicy /></Suspense>,
          },
          {
            path: "terms",
            element: <Suspense fallback={<LoadingSpinner />}><Terms /></Suspense>,
          },
        ],
      },
    ],
  },
];
