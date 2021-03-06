import "react-native-gesture-handler";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CustomThemeProvider from "./components/CustomThemeProvider";
import "./i18n.config";
import Navigation from "./routes";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <CustomThemeProvider>
          <Navigation />
        </CustomThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
