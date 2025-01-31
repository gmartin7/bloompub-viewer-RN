import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/navigationTypes";
import StartScreen from "./src/screens/StartScreen";
import ReaderScreen from "./src/screens/ReaderScreen";
import LibraryScreen from "./src/screens/FindOnBloomLibrary";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Home" id="PUBViewer">
                <RootStack.Screen name="Home" component={StartScreen} />
                <RootStack.Screen
                    name="Read"
                    component={ReaderScreen}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen name="Library" component={LibraryScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default App;
