import MainPage from "../pages/MainPage";
import SearchPage from "../pages/SearchPage";

const routes = [
    {
        path: '/',
        element: <MainPage></MainPage>
    },
    {
        path: '/search',
        element: <SearchPage></SearchPage>
    }
]

export default routes