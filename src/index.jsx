import React from 'react'
import App from './App'
import store from './store'
import {Provider} from 'react-redux'
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
      <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
      </QueryClientProvider>

);

