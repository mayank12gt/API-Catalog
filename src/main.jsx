import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import {BrowserRouter} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  <ChakraProvider >
  <BrowserRouter>
  <QueryClientProvider client={client}  >
    <App />
    </QueryClientProvider>
    </BrowserRouter>
    </ChakraProvider>
    
  </React.StrictMode>,
)
