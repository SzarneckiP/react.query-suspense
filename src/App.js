import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css';
import { PokemonPager } from './Pokemon';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
})


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <p>Learn React.query-suspense</p>
        </header>
        <div className='App-body'>
          <React.Suspense fallback={'Loading...'}>
            <PokemonPager />
          </React.Suspense>
        </div>
      </div>
    </QueryClientProvider >
  );
}

export default App;
