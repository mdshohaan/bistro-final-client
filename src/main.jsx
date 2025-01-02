import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./providers/Authprovider.jsx";
import { Router } from "./Routes/Router.jsx";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <div className="container mx-auto">
      <StrictMode>
        <AuthProvider>
      
          <RouterProvider router={Router} />
        </AuthProvider>
      </StrictMode>
      ,
    </div>
  </HelmetProvider>
);
