// import React from "react";

// const App = ({}) => {
//     return (
//         <div id="app-element" className="App">
//             <ToastContainer 
//                 position="top-right"
//                 autoClose={5000}
//                 hideProgressBar={true}
//                 newestOnTop
//                 closeOnClick
//                 rtl={false}
//                 draggable
//                 pauseOnHover
//                 pauseOnVisibilityChange />

//             <main>
//                 <LoginModal
//                     isHidden={hideLoginModal} 
//                     saveUserKey={handleLoginResult} 
//                     close={handleCloseLoginModal} />

//                 <ApproveEventModal 
//                     changingRooms={changingRooms} 
//                     close={handleCloseApproveEventModal} 
//                     isHidden={hideNonApprovedModal} 
//                     nonApprovedEvents={nonApprovedEvents} 
//                     send={handleSendApprovalEvent} />

//                 <Navigation 
//                     drawerIsOpen={drawerIsOpen}
//                     toggleDrawer={handleDrawerToggle}
//                     selectedDate={selectedDate}
//                     onChange={handleDate}
//                     isLoggedIn={isLoggedIn}
//                     onNewBookingClick={handleNewBookingClick}
//                     onLoginClick={handleLoginClick}
//                     onNextClick={handleOnNextClick}
//                     onPrevClick={handleOnPrevClick}
//                     onShowApproveEventModal={handleShowApproveEventModal}
//                     nonApprovedCount={nonApprovedCount} />
                
//                 <CalendarWeek 
//                     changingRooms={changingRooms} 
//                     userKey={userApiKey} 
//                     adminLoggedIn={userApiKey != null} 
//                     onCloseBookingModal={handleCloseBookingModal} 
//                     newBookingModalIsHidden={newBookingModalIsHidden} 
//                     shiftRight={drawerIsOpen} 
//                     weekDate={weekDate} />
//             </main>
//         </div>
//     );
// };

// export default App;
