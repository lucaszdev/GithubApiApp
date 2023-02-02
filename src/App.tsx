import React from 'react';
import {
    StatusBar,
    LogBox,
    Provider,
    NavigationContainer
} from '@modules';

import { store } from './stores';
import { NavigationCotainer } from '@react-navigation/native';
import { Navigation } from '@navigation';
import { isDarkMode } from '@utils';
import { dark, light } from '@theme';
import './utils/config/reactotron';

const App = () => {
    LogBox.ignoreAllLogs();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>

            <StatusBar
                barStyle={isDarkMode() ? 'light-content' : 'dark-content'}
                backgroundColor={isDarkMode() ? dark.primary : light.primary}
            />
        </Provider>
    );
}

export default App;
