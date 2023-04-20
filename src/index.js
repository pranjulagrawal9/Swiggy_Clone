import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantInfo from "./components/RestaurantInfo/RestaurantInfo";
import CardContainer from "./components/CardContainer/CardContainer";

const router= createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <CardContainer />
            },
            {
                path: "/restaurants/:restaurantURL",
                element: <RestaurantInfo />
            }
        ]
    }
])

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
