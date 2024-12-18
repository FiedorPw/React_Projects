import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ExchangeRate from "./components/ExchangeRate.jsx";
import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Disable automatic refetching on focus
      refetchInterval: 60000, // Refetch queries every 60 seconds
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ExchangeRate />
    </QueryClientProvider>
  );
}

export default App;
