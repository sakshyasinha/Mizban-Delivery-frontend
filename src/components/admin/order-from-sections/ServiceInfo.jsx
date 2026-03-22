export default function ServiceInfo() {
    return (
        <div>
            <h2>Service Details</h2>
            <div>
                <label htmlFor="category">Delivery category</label>
                <select name="" id="category">
                    <option value="food">Food</option>
                    <option value="parcel">Parcel</option>
                    <option value="grocery">Grocery</option>
                    <option value="other">Other</option>
                </select>
                <label htmlFor="serviceType">Service type</label>
                <select name="" id="serviceType">
                    <option value="immediate">Immediate</option>
                    <option value="scheduled">Scheduled</option>
                </select>
                <label htmlFor="serviceLevel">Service level</label>
                <select name="" id="serviceLevel">
                    <option value="standard">Standard</option>
                    <option value="express">Express</option>
                </select>
                <label htmlFor="priority">Priority</label>
                <select name="" id="priority">
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                    <option value="critical">Critical</option>
                </select>
                <label htmlFor="deadline">Delivery deadline</label>
                <input type="date" />
            </div>
        </div>
    )
}