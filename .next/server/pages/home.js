"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/home";
exports.ids = ["pages/home"];
exports.modules = {

/***/ "./src/firebase_setup/firebase.js":
/*!****************************************!*\
  !*** ./src/firebase_setup/firebase.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firestore\": () => (/* binding */ firestore)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/firestore */ \"@firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDwB_w1rrEFpktAAEyAkmc-7uNM2mWsBiQ\",\n    authDomain: \"impulsefinder-b9889.firebaseapp.com\",\n    projectId: \"impulsefinder-b9889\",\n    storageBucket: \"impulsefinder-b9889.appspot.com\",\n    messagingSenderId: \"235724087287\",\n    appId: \"1:235724087287:web:7e0c9f13985b99e704d8f2\",\n    measurementId: \"G-BWTFXSVXN9\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst firestore = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlyZWJhc2Vfc2V0dXAvZmlyZWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdURBQXVEO0FBQ1Y7QUFDSztBQUVsRCw0REFBNEQ7QUFDNUQsaUVBQWlFO0FBRWpFLHdDQUF3QztBQUN4QyxtRUFBbUU7QUFDbkUsTUFBTUUsY0FBYyxHQUFHO0lBQ3JCQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUscUNBQXFDO0lBQ2pEQyxTQUFTLEVBQUUscUJBQXFCO0lBQ2hDQyxhQUFhLEVBQUUsaUNBQWlDO0lBQ2hEQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsY0FBYztDQUM5QjtBQUVELHNCQUFzQjtBQUN0QixNQUFNQyxHQUFHLEdBQUdWLDJEQUFhLENBQUNFLGNBQWMsQ0FBQztBQUNsQyxNQUFNUyxTQUFTLEdBQUdWLGlFQUFZLENBQUNTLEdBQUcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dlb2d1ZXNzci8uL3NyYy9maXJlYmFzZV9zZXR1cC9maXJlYmFzZS5qcz8yM2ZkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiXG5cbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcblxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lEd0JfdzFyckVGcGt0QUFFeUFrbWMtN3VOTTJtV3NCaVFcIixcbiAgYXV0aERvbWFpbjogXCJpbXB1bHNlZmluZGVyLWI5ODg5LmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwiaW1wdWxzZWZpbmRlci1iOTg4OVwiLFxuICBzdG9yYWdlQnVja2V0OiBcImltcHVsc2VmaW5kZXItYjk4ODkuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMjM1NzI0MDg3Mjg3XCIsXG4gIGFwcElkOiBcIjE6MjM1NzI0MDg3Mjg3OndlYjo3ZTBjOWYxMzk4NWI5OWU3MDRkOGYyXCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1CV1RGWFNWWE45XCJcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuZXhwb3J0IGNvbnN0IGZpcmVzdG9yZSA9IGdldEZpcmVzdG9yZShhcHApXG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEZpcmVzdG9yZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImZpcmVzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/firebase_setup/firebase.js\n");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/firestore */ \"@firebase/firestore\");\n/* harmony import */ var _firebase_setup_firebase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase_setup/firebase.js */ \"./src/firebase_setup/firebase.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _firebase_setup_firebase_js__WEBPACK_IMPORTED_MODULE_3__]);\n([_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _firebase_setup_firebase_js__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction App() {\n    const fetchVideos = async ()=>{\n        await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase_setup_firebase_js__WEBPACK_IMPORTED_MODULE_3__.firestore, \"videos\")).then((querySnapshot)=>{\n            const newData = querySnapshot.docs.map((doc)=>({\n                    ...doc.data(),\n                    id: doc.id\n                }));\n            setVideos(newData);\n            console.log(newData);\n        });\n    };\n    const { 0: videos , 1: setVideos  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchVideos();\n    }, []);\n    if (videos.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CircularProgress, {}, void 0, false, {\n            fileName: \"/Users/christianlung/LAHacks23/src/pages/home.js\",\n            lineNumber: 25,\n            columnNumber: 12\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"App\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Video List\"\n                }, void 0, false, {\n                    fileName: \"/Users/christianlung/LAHacks23/src/pages/home.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: fetchVideos,\n                    children: \"Refresh Videos\"\n                }, void 0, false, {\n                    fileName: \"/Users/christianlung/LAHacks23/src/pages/home.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: videos.map((video)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                margin: \"1rem\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: video.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/christianlung/LAHacks23/src/pages/home.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                    width: \"560\",\n                                    height: \"315\",\n                                    src: `${video.url}?autoplay=1&mute=1`,\n                                    title: video.title,\n                                    frameborder: \"0\",\n                                    allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n                                    allowFullScreen: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/christianlung/LAHacks23/src/pages/home.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, video.id, true, {\n                            fileName: \"/Users/christianlung/LAHacks23/src/pages/home.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/christianlung/LAHacks23/src/pages/home.js\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/christianlung/LAHacks23/src/pages/home.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this);\n    }\n// return (\n//   <div className=\"App\">\n//     <form onSubmit={submithandler}>\n//       <input type= \"text\" ref={dataRef} />\n//       <button type = \"submit\">Save</button>\n//       <button type = \"button\" onClick={logData}>Fetch</button>\n//     </form>\n//   </div>\n// // );\n// return (\n//   <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>\n//     <Grid item xs={6}>\n//       <Videos/>\n//     </Grid>\n//     <Grid item xs={6}>\n//       <Videos/>\n//     </Grid>\n//     <Grid item xs={6}>\n//       <Videos/>\n//     </Grid>\n//     <Grid item xs={6}>\n//       <Videos/>\n//     </Grid>\n//   </Grid>\n// );\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQW1EO0FBQ2M7QUFDUjtBQUNIO0FBQ3RCO0FBRWhDLFNBQVNVLEdBQUcsR0FBRztJQUNiLE1BQU1DLFdBQVcsR0FBRyxVQUFZO1FBQzlCLE1BQU1QLDREQUFPLENBQUNDLCtEQUFVLENBQUNDLGtFQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FDekNNLElBQUksQ0FBQyxDQUFDQyxhQUFhLEdBQUc7WUFDbkIsTUFBTUMsT0FBTyxHQUFHRCxhQUFhLENBQUNFLElBQUksQ0FDN0JDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEdBQU07b0JBQUMsR0FBR0EsR0FBRyxDQUFDQyxJQUFJLEVBQUU7b0JBQUVDLEVBQUUsRUFBQ0YsR0FBRyxDQUFDRSxFQUFFO2lCQUFFLEVBQUU7WUFDNUNDLFNBQVMsQ0FBQ04sT0FBTyxDQUFDLENBQUM7WUFDbkJPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixPQUFPLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQsTUFBTSxLQUFDUyxNQUFNLE1BQUVILFNBQVMsTUFBSWxCLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRXhDRixnREFBUyxDQUFDLElBQU07UUFDZFcsV0FBVyxFQUFFO0lBQ2YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVOLElBQUlZLE1BQU0sQ0FBQ0MsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN2QixxQkFBTyw4REFBQ2pCLDJEQUFnQjs7OztnQkFBRztJQUM3QixPQUFPO1FBQ0wscUJBQ0UsOERBQUNrQixLQUFHO1lBQUNDLFNBQVMsRUFBQyxLQUFLOzs4QkFDcEIsOERBQUNDLElBQUU7OEJBQUMsWUFBVTs7Ozs7d0JBQUs7OEJBQ25CLDhEQUFDQyxRQUFNO29CQUFDQyxPQUFPLEVBQUVsQixXQUFXOzhCQUFFLGdCQUFjOzs7Ozt3QkFBUzs4QkFDckQsOERBQUNjLEtBQUc7OEJBQ0RGLE1BQU0sQ0FBQ1AsR0FBRyxDQUFDLENBQUNjLEtBQUssaUJBQ2hCLDhEQUFDTCxLQUFHOzRCQUFnQk0sS0FBSyxFQUFFO2dDQUFDQyxNQUFNLEVBQUUsTUFBTTs2QkFBQzs7OENBQ3pDLDhEQUFDQyxJQUFFOzhDQUFFSCxLQUFLLENBQUNJLEtBQUs7Ozs7O3dDQUFNOzhDQUN0Qiw4REFBQ0MsUUFBTTtvQ0FDTEMsS0FBSyxFQUFDLEtBQUs7b0NBQ1hDLE1BQU0sRUFBQyxLQUFLO29DQUNaQyxHQUFHLEVBQUUsQ0FBQyxFQUFFUixLQUFLLENBQUNTLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztvQ0FDckNMLEtBQUssRUFBRUosS0FBSyxDQUFDSSxLQUFLO29DQUNsQk0sV0FBVyxFQUFDLEdBQUc7b0NBQ2ZDLEtBQUssRUFBQywwRkFBMEY7b0NBQ2hHQyxlQUFlOzs7Ozt3Q0FDUDs7MkJBVkZaLEtBQUssQ0FBQ1gsRUFBRTs7OztnQ0FXVixDQUNSOzs7Ozt3QkFDRTs7Ozs7O2dCQUNGLENBQ0w7SUFDSCxDQUFDO0FBRUQsV0FBVztBQUNYLDBCQUEwQjtBQUMxQixzQ0FBc0M7QUFDdEMsNkNBQTZDO0FBQzdDLDhDQUE4QztBQUM5QyxpRUFBaUU7QUFDakUsY0FBYztBQUNkLFdBQVc7QUFDWCxRQUFRO0FBQ1IsV0FBVztBQUNYLDRFQUE0RTtBQUM1RSx5QkFBeUI7QUFDekIsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCx5QkFBeUI7QUFDekIsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCx5QkFBeUI7QUFDekIsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCx5QkFBeUI7QUFDekIsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxZQUFZO0FBQ1osS0FBSztBQUVQLENBQUM7QUFFRCxpRUFBZVQsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2VvZ3Vlc3NyLy4vc3JjL3BhZ2VzL2hvbWUuanM/MGIzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFkZERvYywgZ2V0RG9jcywgY29sbGVjdGlvbiB9IGZyb20gXCJAZmlyZWJhc2UvZmlyZXN0b3JlXCJcbmltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gXCIuLi9maXJlYmFzZV9zZXR1cC9maXJlYmFzZS5qc1wiXG5pbXBvcnQgeyBDaXJjdWxhclByb2dyZXNzLCBHcmlkfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcblxuZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBmZXRjaFZpZGVvcyA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZmlyZXN0b3JlLCBcInZpZGVvc1wiKSlcbiAgICAgICAgLnRoZW4oKHF1ZXJ5U25hcHNob3QpPT57ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBuZXdEYXRhID0gcXVlcnlTbmFwc2hvdC5kb2NzXG4gICAgICAgICAgICAgICAgLm1hcCgoZG9jKSA9PiAoey4uLmRvYy5kYXRhKCksIGlkOmRvYy5pZCB9KSk7XG4gICAgICAgICAgICAgICAgc2V0VmlkZW9zKG5ld0RhdGEpOyAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdEYXRhKTtcbiAgICAgICAgfSlcbiAgfVxuXG4gIGNvbnN0IFt2aWRlb3MsIHNldFZpZGVvc10gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4geyBcbiAgICBmZXRjaFZpZGVvcygpXG4gIH0sIFtdKVxuXG4gIGlmICh2aWRlb3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDxDaXJjdWxhclByb2dyZXNzIC8+XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICA8aDE+VmlkZW8gTGlzdDwvaDE+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZldGNoVmlkZW9zfT5SZWZyZXNoIFZpZGVvczwvYnV0dG9uPlxuICAgICAgPGRpdj5cbiAgICAgICAge3ZpZGVvcy5tYXAoKHZpZGVvKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3ZpZGVvLmlkfSBzdHlsZT17e21hcmdpbjogXCIxcmVtXCJ9fT5cbiAgICAgICAgICAgIDxoMz57dmlkZW8udGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgd2lkdGg9XCI1NjBcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzMTVcIlxuICAgICAgICAgICAgICBzcmM9e2Ake3ZpZGVvLnVybH0/YXV0b3BsYXk9MSZtdXRlPTFgfVxuICAgICAgICAgICAgICB0aXRsZT17dmlkZW8udGl0bGV9XG4gICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXG4gICAgICAgICAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiXG4gICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG4gXG4gIC8vIHJldHVybiAoXG4gIC8vICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgLy8gICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRoYW5kbGVyfT5cbiAgLy8gICAgICAgPGlucHV0IHR5cGU9IFwidGV4dFwiIHJlZj17ZGF0YVJlZn0gLz5cbiAgLy8gICAgICAgPGJ1dHRvbiB0eXBlID0gXCJzdWJtaXRcIj5TYXZlPC9idXR0b24+XG4gIC8vICAgICAgIDxidXR0b24gdHlwZSA9IFwiYnV0dG9uXCIgb25DbGljaz17bG9nRGF0YX0+RmV0Y2g8L2J1dHRvbj5cbiAgLy8gICAgIDwvZm9ybT5cbiAgLy8gICA8L2Rpdj5cbiAgLy8gLy8gKTtcbiAgLy8gcmV0dXJuIChcbiAgLy8gICA8R3JpZCBjb250YWluZXIgcm93U3BhY2luZz17MX0gY29sdW1uU3BhY2luZz17eyB4czogMSwgc206IDIsIG1kOiAzIH19PlxuICAvLyAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gIC8vICAgICAgIDxWaWRlb3MvPlxuICAvLyAgICAgPC9HcmlkPlxuICAvLyAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gIC8vICAgICAgIDxWaWRlb3MvPlxuICAvLyAgICAgPC9HcmlkPlxuICAvLyAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gIC8vICAgICAgIDxWaWRlb3MvPlxuICAvLyAgICAgPC9HcmlkPlxuICAvLyAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gIC8vICAgICAgIDxWaWRlb3MvPlxuICAvLyAgICAgPC9HcmlkPlxuICAvLyAgIDwvR3JpZD5cbiAgLy8gKTtcblxufVxuIFxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImFkZERvYyIsImdldERvY3MiLCJjb2xsZWN0aW9uIiwiZmlyZXN0b3JlIiwiQ2lyY3VsYXJQcm9ncmVzcyIsIkdyaWQiLCJSb3V0ZXIiLCJBcHAiLCJmZXRjaFZpZGVvcyIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwibmV3RGF0YSIsImRvY3MiLCJtYXAiLCJkb2MiLCJkYXRhIiwiaWQiLCJzZXRWaWRlb3MiLCJjb25zb2xlIiwibG9nIiwidmlkZW9zIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwidmlkZW8iLCJzdHlsZSIsIm1hcmdpbiIsImgzIiwidGl0bGUiLCJpZnJhbWUiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsInVybCIsImZyYW1lYm9yZGVyIiwiYWxsb3ciLCJhbGxvd0Z1bGxTY3JlZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/home.js\n");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@firebase/firestore":
/*!**************************************!*\
  !*** external "@firebase/firestore" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@firebase/firestore");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/home.js"));
module.exports = __webpack_exports__;

})();