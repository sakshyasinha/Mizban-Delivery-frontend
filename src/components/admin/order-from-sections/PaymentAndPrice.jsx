export default function PaymentAndPrice (){
  return(
    <div>
       <h2>Price and Payment Details</h2>
        <div>
            <label htmlFor="amountToCollect">Items subtotal</label>
            <input type="number" id="amountToCollect" readOnly/>
            <label htmlFor="discount">Discount</label>
            <input type="number" id="discount"/>
            <label htmlFor="total">Delivery Price</label>
            <input type="number" id="total" />
            <label htmlFor="finalPrice">Final Price</label>
            <input type="number" id="finalPrice" readOnly/>
        </div>
        <div>
            <label htmlFor="paymentMethod">Payment Method</label>
            <select name="" id="paymentMethod">
                <option value="COD">COD</option>
                <option value="online">Online</option>
            </select>
        </div>
    </div>
  )
}