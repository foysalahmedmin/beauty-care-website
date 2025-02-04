// Layouts
import CommonLayout from "@/components/layouts/CommonLayout";
import RootLayout from "@/components/layouts/RootLayout";
import HomePage from "@/pages/(common)/HomePage";

// Partials Pages
import ErrorPage from "@/pages/(partials)/ErrorPage";

// Common Pages
import About from "@/pages/(common)/About";
import Contact from "@/pages/(common)/Contact";
import Aesthetic from "@/pages/(common)/Services/Aesthetic";
import AestheticClinic from "@/pages/(common)/Services/AestheticClinic";
import ConciergeService from "@/pages/(common)/Services/ConciergeService";
import OneGp from "@/pages/(common)/Services/OneGp";
import PrivateGp from "@/pages/(common)/Services/PrivateGp";

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <CommonLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "private_gp_clinic",
            element: <PrivateGp />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "private_gp_clinic/:slug",
            element: <OneGp />,
          },
          {
            path: "aesthetic_clinic",
            element: <AestheticClinic />,
          },
          {
            path: "aesthetic_clinic/:slug",
            element: <Aesthetic />,
          },
          {
            path: "concierge_service",
            element: <ConciergeService />,
          },
        ],
      },
    ],
  },
];
