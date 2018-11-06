import './css/site.scss';
import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import * as RoutesModule from './routes';
let routes = RoutesModule.routes;
import { Provider } from 'mobx-react';
import cartStore from './stores/cart-store'
import productsStore from './stores/products-store';
import { configure } from 'mobx';

const stores = {
    cartStore,
    productsStore
}

function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing
    // configuration and injects the app into a DOM element.
    const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
    ReactDOM.render(
        <Provider {...stores}>
            <AppContainer>
                <BrowserRouter children={ routes } basename={ baseUrl } />
            </AppContainer>
        </Provider>,
        document.getElementById('react-app')
    );
}

configure({
    enforceActions: "always"
});

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('./routes', () => {
        routes = require<typeof RoutesModule>('./routes').routes;
        renderApp();
    });
}
