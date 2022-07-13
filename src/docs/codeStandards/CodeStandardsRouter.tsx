import { Route, Navigate, Routes } from 'react-router';
import CodeStandards from './CodeStandards';


const CodeStandardsRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path='' element={<Navigate to='general' />} />
      <Route path=':standardName' element={<CodeStandards />} />
    </Routes>
  );
}

export default CodeStandardsRouter;