import { Suspense, lazy } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Spin } from 'antd';

const Demo = lazy(() => import('./pages/demo'));

function App() {
  return (
    <>
      <HashRouter>
        <Suspense fallback={<Spin size="large" className="component-spin" />}>
          <Routes>
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
}
export default App;