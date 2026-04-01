import api from "./api"
export const getAllOrders = async()=>{

}
export const createNewOrder = async (orderData) => {
    const response = await api.post("orders", { json: orderData }).json()
    return response
}
export const updatedOrder = async (orderId, updatedOrderData) => {
    const response = await api.put(`orders/${orderId}`, { json: updatedOrderData })
    return response
}
export const cancelOrder = async (orderId, cancelReason) => {
    const response = await api.patch(`orders/${orderId}/cancel`, { json: cancelReason })
    return response
}
export const markOrderDelivered = async (orderId) => {
    const response = await api.patch(`orders/${orderId}/deliver`)
    return response
}
