import React from "react";
import { useState } from "react";
import Signin from "./signin";
import { Route,Routes,useRoutes } from "react-router-dom";
import Start from "./FirstWIn";
import Login from "./signin";
import Start1 from "./FirstDuplicate";
import Screen3 from './screen3';
import Screen5 from "./screen5";
import Screen5a from "./screen5a";
import Screen6 from "./screen6";
import RadioButtonForm from "./screen6MCQ";
import Screen7 from './screen7';
import Screen7a from './screen7a';
import Screen8 from "./screen8";
import Screen8mcq from "./screen8mcq";
import Screen8a from './screen8a';
import Screen8b from './screen8b';
import Screen8c from './screen8c';
import Screen8d from "./screen8d";
import Screen9 from "./screen9";
import Screen9mcq from './screen9mcq';
import Screen9a from "./screen9a";
import Screen9b from "./screen9b";
import Screen10 from "./screen10";
import Screen10mcq from './Screen10mcq';
import Screen10b from "./screen10b";
import ThankYouPage from "./screenlast";
export default function App(){
    return(
        <>
        <Routes>
            <Route path='/start1' element={<Start1/>}></Route>
            <Route path='/Screen-3' element={<Screen3/>}></Route>
            <Route path='/Screen-5' element={<Screen5/>}></Route>
            <Route path='/Screen-5a' element={<Screen5a/>}></Route>
            <Route path='/Screen-6' element={<Screen6/>}></Route>
            <Route path='/Screen-7' element={<Screen7/>}></Route>
            <Route path='/Screen-7a' element={<Screen7a/>}></Route>
            <Route path='/Screen-8' element={<Screen8/>}></Route>
            <Route path='/Screen-8mcq' element={<Screen8mcq/>}></Route>
            <Route path='/Screen-8a' element={<Screen8a/>}></Route>
        <Route path='/Screen-8d' element={<Screen8d/>}></Route>
        <Route path='/Screen-8b' element={<Screen8b/>}></Route>
        <Route path='/Screen-8c' element={<Screen8c/>}></Route>
        <Route path='/Screen-9' element={<Screen9/>}></Route>
        <Route path='/Screen-9mcq' element={<Screen9mcq/>}></Route>
        <Route path='/Screen-9a' element={<Screen9a/>}></Route>
        <Route path='/Screen-9b'element={<Screen9b/>}></Route>
<Route path='/Screen-10' element={<Screen10/>}></Route>
<Route path='/Screen-10mcq' element={<Screen10mcq/>}></Route>
<Route path='/Screen-10b'element={<Screen10b/>}></Route>
<Route path="/Screen-last" element={<ThankYouPage/>}></Route>


            <Route path='/Screen-6mcq' element={<RadioButtonForm/>}></Route>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/start' element={<Start/>}/>

        </Routes>
        </>
    );
}