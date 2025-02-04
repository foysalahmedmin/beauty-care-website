// Layouts
import CommonLayout from "@/components/layouts/CommonLayout";
import RootLayout from "@/components/layouts/RootLayout";
import HomePage from "@/pages/(common)/HomePage";

// Partials Pages
import ErrorPage from "@/pages/(partials)/ErrorPage";

// Common Pages
import AestheticClinic from "@/pages/(common)/Services/AestheticClinic";
import ConciergeService from "@/pages/(common)/Services/ConciergeService";
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
            path: "aesthetic_clinic",
            element: <AestheticClinic />,
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
