
  import { createRoot } from "react-dom/client";
  import { BrowserRouter } from "react-router-dom";
  import { GoogleOAuthProvider } from "@react-oauth/google";
  import App from "./App.tsx";
  import { AuthProvider } from "./contexts/AuthContext.tsx";
  import "./styles/index.css";

  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

  createRoot(document.getElementById("root")!).render(
    <GoogleOAuthProvider clientId={googleClientId}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
