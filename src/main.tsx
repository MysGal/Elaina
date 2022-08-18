import React from 'react'
import ReactDOM from 'react-dom/client'
import {GeistProvider, Grid} from "@geist-ui/core";
import {createBrowserHistory, ReactLocation, Routrer} from "@tanstack/react-location";
import routes from "./router/routes";
import SearchComponent from "./components/SearchComponent";
import {RecoilRoot} from "recoil";

const history = createBrowserHistory()
const location = new ReactLocation({history})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RecoilRoot>
            <GeistProvider>
                <Grid.Container gap={2} justify={"center"} h="100%" w="100%" margin="0px">
                    <Grid.Container gap={2} justify={"center"} h="25%" w="100%" margin="0px">
                        {/*搜索框组件*/}
                        <Grid xs={24}>
                            <SearchComponent></SearchComponent>
                        </Grid>
                    </Grid.Container>
                    <Grid.Container gap={2} justify={"center"} h="75%" w="100%" margin="0px">
                        {/*大屏幕上显示为左侧侧边栏,小屏幕上变为left drawer*/}

                        {/*大屏幕上*/}
                        {/*侧边栏*/}
                        <Grid xs={0} md={6}>
                        </Grid>
                        {/*主展示页面,匹配router*/}
                        <Grid xs={0} md={18}></Grid>


                        {/*小屏幕上*/}
                        <Grid xs={24} md={0}>
                            <p>TestSmall</p>
                        </Grid>
                    </Grid.Container>
                </Grid.Container>

                <Router location={location} routes={routes}/>
            </GeistProvider>
        </RecoilRoot>
    </React.StrictMode>
)
