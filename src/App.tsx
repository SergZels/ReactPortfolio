import { Navigate, Route, Routes } from 'react-router';
import { Shell } from './components/Shell';
import Home from './routes/Home';
import Project from './routes/Project';
import NotFound from './routes/NotFound';
import { REDIRECTS } from './routes/redirects';

export default function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<Project />} />
        {Object.entries(REDIRECTS).map(([from, slug]) => (
          <Route
            key={from}
            path={`/${from}`}
            element={<Navigate to={`/project/${slug}`} replace />}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Shell>
  );
}
