import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./providers/Authprovider.jsx";
import { Router } from "./Routes/Router.jsx";

const queryClient = new QueryClient()
createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <div className="container mx-auto">
      <StrictMode>
        <AuthProvider>
      
        <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={Router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>
        </AuthProvider>
      </StrictMode>
      ,
    </div>
  </HelmetProvider>
);
