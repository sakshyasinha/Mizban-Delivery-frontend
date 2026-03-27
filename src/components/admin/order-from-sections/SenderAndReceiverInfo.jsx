import React, { useEffect } from 'react';
import { LuStore, LuUser } from "react-icons/lu";
import useOrderStore from '../../../store/admin/useOrderStore';

export default function SenderAndReceiverInfo() {
  const inputStyle = "p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-orange-500 focus:bg-white transition-all w-full text-sm";
  const labelStyle = "text-sm font-bold text-gray-700 mb-1 flex items-center gap-1";

  const updateOrderData = useOrderStore((state)=> state.updateOrderData)
  const sender = useOrderStore((state)=> state.orderData.sender)
  const receiver  = useOrderStore((state)=> state.orderData.receiver)


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      
      {/* Business Details (Sender) */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-6 text-orange-600 border-b border-gray-50 pb-4">
          <LuStore size={22} />
          <h2 className="text-lg font-bold text-gray-800">Business Details</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="businessName" className={labelStyle}>
              Business Name
            </label>
            <input 
              type="text" 
              id="businessName" 
              value={sender.name}
              onChange={(e)=> {updateOrderData("sender.name" , e.target.value)}}
              placeholder="Shahmama Restaurant" 
              className={inputStyle} 
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="businessPhoneNumber" className={labelStyle}>
              Phone Number
            </label>
            <input 
              type="text" 
              id="businessPhoneNumber" 
              value={sender.phone}
              onChange={(e)=> updateOrderData("sender.phone", e.target.value)}
              placeholder="070000000" 
              className={inputStyle} 
            />
          </div>
        </div>
      </div>

      {/* Customer Details (Receiver) */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-6 text-orange-600 border-b border-gray-50 pb-4">
          <LuUser size={22} />
          <h2 className="text-lg font-bold text-gray-800">Customer Details</h2>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="customerName" className={labelStyle}>
                Name
              </label>
              <input 
                type="text" 
                id="customerName" 
                value={receiver.name}
                onChange={(e)=> updateOrderData("receiver.name", e.target.value)}
                placeholder="Ali Ahmadi" 
                className={inputStyle} 
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="customerPhoneNumber" className={labelStyle}>
             Phone Number
              </label>
              <input 
                type="text" 
                id="customerPhoneNumber" 
                value={receiver.phone}
                onChange={(e)=> updateOrderData("receiver.phone", e.target.value)}
                placeholder="070000000" 
                className={inputStyle} 
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="customerAddress" className={labelStyle}>
        Delivery Address
            </label>
            <input 
              type="text" 
              id="customerAddress" 
              value={receiver.address}
              onChange={(e)=> updateOrderData("receiver.address", e.target.value)}
              placeholder="Apartment 4, Darulaman Road, District 6, Kabul" 
              className={inputStyle} 
            />
          </div>
        </div>
      </div>

    </div>
  );
}