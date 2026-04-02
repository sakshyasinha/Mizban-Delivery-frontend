import Orders from '../pages/admin/Orders';
import OrderForm from "../components/admin/OrderForm";
import CourierList from '../pages/admin/CourierList';
import AddCourier from '../pages/admin/AddCourier';
import EditCourier from '../pages/admin/EditCourier';
import { ALL_PERMISSIONS } from '../constants/permissions';

const protectedRoutes=[
    {
        path: "/orders",
        element: <Orders/>,
        requiredPermission: ALL_PERMISSIONS.VIEW_ALL_ORDERS
    },
    {
    path: "/order/create-order",
    element: <OrderForm />,
    requiredPermission: ALL_PERMISSIONS.CREATE_ORDER
  },

   {
    path: "/orders/edit-order/:id",
    element: <OrderForm />,
    requiredPermission: ALL_PERMISSIONS.EDIT_ORDER
  },
   {
    path: "/orders/view-order/:id",
    element: <OrderForm readOnly={true} />,
    requiredPermission: ALL_PERMISSIONS.VIEW_ORDER_DETAILS
  },
  {
    path:"/drivers",
    element:<CourierList/>,
  },
  {
    path:"/drivers/add",
    element:<AddCourier/>
  }, 
  {
    path:"/drivers/edit/:id",
    element:<EditCourier/>
  }
]



export default protectedRoutes;
