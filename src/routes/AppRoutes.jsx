import { Routes, Route } from "react-router-dom";

import CourierList from "../pages/admin/CourierList";
import AddCourier from "../pages/admin/AddCourier";
import EditCourier from "../pages/admin/EditCourier";
import Orders from "../pages/admin/Orders";
import OrderForm from "../components/admin/OrderForm";
import AppLayout from "../layout/AppLayout";

export default function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={
                    <div className="text-center mt-10">
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            Project Initialized
                        </h2>
                        <p className="mt-2 text-gray-600">
                            The architecture and styling engine are ready.
                        </p>
                    </div>
                } />

                <Route path="couriers" element={<CourierList />} />
                <Route path="couriers/add" element={<AddCourier />} />
                <Route path="couriers/edit/:id" element={<EditCourier />} />

                <Route path="orders" element={<Orders />} />
                <Route path="order/create-order" element={<OrderForm />} />
                <Route path="orders/edit-order/:id" element={<OrderForm />} />
                <Route path="orders/view-order/:id" element={<OrderForm readOnly={true} />} />

                <Route path="/deliveries" element={<h1>This is deliveries page</h1>} />

                <Route path="settings" element={
                    <div className="my-24 text-center">
                        This is the settings page, settings is not accessible right now
                    </div>
                } />

                <Route path="/analytics" element={<h1>This is analytics page</h1>} />
                <Route path="/menu-manager" element={<h1>This is Menu manger's page</h1>} />

                
                <Route path="*" element={<h1>Page not Found</h1>} />
            </Route>
        </Routes>
    )
}