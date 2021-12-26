import  {createStore} from 'redux';
import fun from './reduces/index';
const stroe = createStore(fun);
export default stroe;