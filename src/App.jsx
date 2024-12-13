import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import StudioPage from "./pages/StudioPage";
import Loader from "./components/Loader/Loader";

const App = () => {
  const location = useLocation();
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    setShowAnimation(true);
  }, [location.pathname]);

  return (
    <>
      <Loader
        showAnimation={showAnimation}
        onComplete={() => setShowAnimation(false)}
      />

      <AnimatePresence mode="wait">
        {!showAnimation && (
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/studio"
                element={<StudioPage />}
              />
              <Route
                path="*"
                element={<NotFoundPage />}
              />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
