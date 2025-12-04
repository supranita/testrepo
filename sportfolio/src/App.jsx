import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import routes from "./routes";
import Main from "./layouts/Main";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  route.layout === "main" ? (
                    <Main>
                      <route.component />
                    </Main>
                  ) : (
                    <Auth>
                      <route.component />
                    </Auth>
                  )
                }
              />
            );
          })}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
