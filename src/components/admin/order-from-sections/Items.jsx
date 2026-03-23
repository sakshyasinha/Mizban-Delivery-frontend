import Button from "../../common/order/Button"
export default function items() {
    const items = [
    { id: 1, name: "Sample Item", quantity: 1, unitPrice: 100 }
  ];
    return (
        <div>
            <div>
                <h2>items Details</h2>
                <Button text="Add item" />
            </div>
            <div>

                {items.length === 0 ? (<div>No items Added Yet!</div>) : (
                    <table>
                        <thead>
                            <tr >
                                <th >Item Name</th>
                                <th >Quantity</th>
                                <th >Unit Price</th>
                                <th >Total</th>
                                <th ></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>
                                            <button>+</button>
                                            <span> {item.quantity}</span>
                                            <button>-</button>
                                        </td>
                                        <td>{item.unitPrice}</td>
                                        <td>{item.quantity * item.unitPrice} AFN</td>
                                        <td>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}