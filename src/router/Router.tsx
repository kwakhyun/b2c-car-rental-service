import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/404';
import Detail from '../pages/Detail';
import Home from '../pages/Home';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
