/**

This module exports the App component which is the main component of the application.
@packageDocumentation
*/
import React from "react";
import { MainPage } from "../Pages/MainPage/Mainpage";
import { Navigate, Route, Routes } from "react-router";
import { NotFound } from "../Pages/404/NotFound";
/**

The main component of the application.
@returns A JSX element representing the application.
*/

export const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/coderiver" element={<MainPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/clothes" element={<NotFound />} />
        <Route path="/sneakers" element={<NotFound />} />
        <Route path="/bags" element={<NotFound />} />
        <Route path="/accessorize" element={<NotFound />} />
        <Route path="/cart" element={<NotFound />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};
