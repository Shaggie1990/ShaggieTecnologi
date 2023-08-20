import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';

import TabsNavigator from './tabs';
import AuthNavigator from './auth';

function RootNavigator() {
    const [userId, setUserId] = useState(null);
    return (
        <NavigationContainer>{userId ? <TabsNavigator /> : <AuthNavigator />}</NavigationContainer>
    );
}

export default RootNavigator;