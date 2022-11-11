
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../services/redux/store';
import 'react-notifications-component/dist/theme.css'
import { ReactNotifications } from 'react-notifications-component'
import DefaultLayout from 'src/layouts/DefaultLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <DefaultLayout>
      <ReactNotifications />
        <Component {...pageProps} />
      </DefaultLayout>
    </Provider>
  );
}

export default MyApp;