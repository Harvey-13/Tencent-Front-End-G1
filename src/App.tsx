import './assets/css/common.less';
import 'antd/dist/antd.css';
import { useRoutes } from 'react-router-dom';
import router from './router/index';
export default function App() {
  const element = useRoutes(router);
  return element;
}
