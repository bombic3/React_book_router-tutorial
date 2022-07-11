import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';

// index props는 path=” / ”와 동일한 의미
// 좀 더 명시적으로 표현
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles/" element={<Articles />}>
        <Route path="/articles/:id" element={<Article />} />
      </Route>
    </Routes>
  );
}

export default App;
