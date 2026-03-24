import Map from "../../common/order/Map"
export default function Location() {
    return (
        <div>
            <div>
                <Map></Map>
                <div>
                    <h2>
                        Pick up Location
                    </h2>
                    <div>
                        <label htmlFor="lat">Latitude: </label>
                        <input type="text" id="lat" value="0.000000" readOnly />
                        <label htmlFor="long">Longitude:</label>
                        <input type="text" id="long" value="0.000000" readOnly />
                    </div>
                </div>

                <div>
                    <h2>Drop Off Location</h2>
                    <div>
                        <label htmlFor="lat">Latitude: </label>
                        <input type="text" id="lat" value="0.000000" readOnly />
                        <label htmlFor="long">Longitude:</label>
                        <input type="text" id="long" value="0.000000" readOnly />
                    </div>
                </div>
            </div>
        </div>
    )
}