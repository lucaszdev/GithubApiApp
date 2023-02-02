import { createNativeStackNavigator } from '@modules';
import { HomeScreen, RepoDetailsScreen } from '@screens';
import { Routes } from '@utils';

const StackNavigation = createNativeStackNavigator();

const MainStackNavigation = () => (
    <StackNavigation.Navigator>
        <StackNavigation.Screen
            name={Routes.HOME}
            component={HomeScreen}
            options={{ headerShown: false }}
        />

        <StackNavigation.Screen
            name={Routes.REPO_DETAILS}
            component={RepoDetailsScreen}
        />
    </StackNavigation.Navigator>
)

export default MainStackNavigation;
