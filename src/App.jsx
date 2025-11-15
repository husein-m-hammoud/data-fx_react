import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import MarketPage from './pages/MarketPage';
import Company from './pages/Company';
import Trade from './pages/Trade';
import NotFound from './pages/NotFound';
import Platform from './pages/Platform';
import DepositIntent from './pages/DepositIntent';
import Partners from './pages/Partners';
import { TranslationProvider } from './contexts/TranslationContext';
import BecomeBroker from './pages/BecomeBroker';
import Demo from './pages/Demo';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <TranslationProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/markets/:marketType' element={<MarketPage />} />
            <Route path='/company' element={<Company />} />
            <Route path='/trade' element={<Trade />} />
            <Route path='/platform' element={<Platform />} />
            <Route path='/deposit' element={<DepositIntent />} />
            <Route path='/partners' element={<Partners />} />
            <Route path='/become-broker' element={<BecomeBroker />} />
            <Route path='/demo' element={<Demo />} />
          </Routes>
        </BrowserRouter>
      </TranslationProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
