import React from 'react'
import ReactDOM from 'react-dom/client'
import {GeistProvider, Grid} from "@geist-ui/core";
import {createBrowserHistory, ReactLocation, Router} from "@tanstack/react-location";
import routes from "./router/routes";
import SearchComponent from "./components/SearchComponent";

const history = createBrowserHistory()
const location = new ReactLocation({history})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <GeistProvider>
            <Grid.Container gap={2} justify={"center"} h="100%">
                {/*搜索框组件*/}
                <Grid xs={24} h="20%">
                    <SearchComponent></SearchComponent>
                </Grid>

            </Grid.Container>

            <Router location={location} routes={routes}/>
        </GeistProvider>
    </React.StrictMode>
)
