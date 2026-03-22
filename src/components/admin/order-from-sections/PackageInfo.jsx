export default function PackageInfo(){
    return(
        <div>
            <h2>Package Details</h2>
             <label htmlFor="weight">Weight</label>
             <input type="number" min={0} id="weight"/>
             <label htmlFor="size">Size</label>
             <select  id="size">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
             </select>
             <label htmlFor="isFragile">Fragile</label>
             <input type="radio" id="isFragile"/>
             <label htmlFor="note">Note</label>
             <textarea  id="note" maxLength={200}></textarea>
        </div>
    )}