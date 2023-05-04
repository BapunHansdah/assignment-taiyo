import React from 'react'
import Main from './components/main'
import Layout from './layout'
import NotFound from './components/notfound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query';


function App() {
    return (
        <>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element={<Main/>} />  
            </Route>
              <Route path='*' element={<NotFound/>} />    
          </Routes>
      </BrowserRouter> 
      </>
    )
}

export default App