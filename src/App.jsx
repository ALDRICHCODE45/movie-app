import { AuthProvider } from "./auth/Context/AuthProvider";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
