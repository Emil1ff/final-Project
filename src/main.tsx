import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './assets/functions/store/store';
import './index.css'
import Home from './assets/pages/HomePage/Home';


const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
} else {
  console.error('Root element not found');
}
