import React from "react";

import "../../node_modules/react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";

import CalendarWeekContainer from "./calendar/containers/CalendarWeek";
import NavigationContainer from "./navigation/NavigationContainer";
import ModalsView from "./modals/ModalsView";

const App = () => {
    return (
        <div id="app-element" className="App">
            <ModalsView />
            
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover
                pauseOnVisibilityChange />

            <main>
                <NavigationContainer />

                <CalendarWeekContainer />
            </main>
        </div>
    );
};

export default App;
