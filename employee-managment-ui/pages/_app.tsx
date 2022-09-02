
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import DefaultLayout from '../ui/layouts/DefaultLayout';
import 'react-notifications-component/dist/theme.css'
import { ReactNotifications } from 'react-notifications-component'

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