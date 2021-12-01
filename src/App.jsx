import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "styled-components";
import Home from './pages/Home';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Suspense, useState } from 'react';
import { DarkTheme, LightTheme } from "./styled";
import Header from "./components/Header";
import { MyProfile } from "./pages/MyProfile";
import { Footer } from "./components/Footer";
import { NotFound } from "./pages/NotFound";
import { Hotelist } from "./pages/Hotelist";

const App = () => {

  const [theme, toggleTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <div className="App">
          <BrowserRouter>
          <Suspense fallback="loading">
            <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/profile' element={<MyProfile/>}/>
              <Route path='/hotelist' element={<Hotelist/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>
          </Suspense>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
    
  );
}

export default App;
