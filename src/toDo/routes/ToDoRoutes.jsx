import React from "react";
import { Routes , Route , Navigate } from 'react-router-dom';
import { ToDoPage } from '../pages/ToDoPage'

export const ToDoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ToDoPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
