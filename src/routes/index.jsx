// Layouts
import CommonLayout from "@/components/layouts/CommonLayout";
import RootLayout from "@/components/layouts/RootLayout";
import HomePage from "@/pages/(common)/HomePage";

// Partials Pages
import ErrorPage from "@/pages/(partials)/ErrorPage";

// Common Pages

export const routes = [
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <CommonLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
        ],
      },
    ],
  },
];
