import React from 'react'
import ReactDOM from 'react-dom/client'

import {RecoilRoot} from "recoil";
import MainPage from "./pages/MainPage";
import {GeistProvider} from "@geist-ui/core";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>

            <GeistProvider>
                <MainPage></MainPage>
            </GeistProvider>
    </React.StrictMode>
)
