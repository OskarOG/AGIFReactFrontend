import React from "react";

import CalendarWeekContainer from "./calendar/containers/CalendarWeek";
import NavigationContainer from "./navigation/NavigationContainer";


const App = () => {

    return (
        <div id="app-element" className="App">
            <main>
                <NavigationContainer />

                <CalendarWeekContainer />
            </main>
        </div>
    );
};

export default App;
