import axios from "axios";
import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Seller = () => {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(2);
  const [price, setPrice] = useState(0);
  const [owner, setOwner] = useState("");
  const [img, setImg] = useState("");
  const [state, setState] = useState("");
  const [taluka, setTaluka] = useState("");
  const [district, setDistrict] = useState("");
  const [village, setVillage] = useState("");
  const [description, setDescription] = useState("");
  const [contact_number, setContact_Number] = useState(0);
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:6000/crops/create", {
        title,
        quantity,
        price,
        owner,
        img,
        state,
        taluka,
        district,
        village,
        description,
        contact_number,
        address,
      });
      toast.success("Product added successfully");
      navigate("/buy");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-cream text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto">
      <div className="flex flex-col flex-1 rounded-md shadow-xl my-10 mx-32 md:p-0 lg:pt-8 lg:px-8 md:mx-36">
        <form
          action=""
          className="flex flex-col gap-5 uppercase font-sans font-semibold"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row justify-between">
            <label htmlFor="">
              <p className="pl-1">Category</p>
              <select
                className="bg-gray-100 rounded-md p-2 my-2"
                name="category"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="fields[category]"
                placeholder="select"
              >
                <option value="Rice">Rice</option>
                <option value="Grapes">Grapes</option>
                <option value="Wheat">Wheat</option>
                <option value="Potato">Potato</option>
                <option value="Tomato">Tomato</option>
                <option value="Mango">Mango</option>
                <option value="Apple">Apple</option>
              </select>
            </label>
            <label htmlFor="">
              <p className="pl-1">Images</p>
              <FileBase
                type="file"
                multiple={false}
                onChange={(e) => setImg(e.target.value)}
                name="fields[images][]"
                className="upload-btn"
                onDone={({ base64 }) => setImg(base64)}
              />
              {/* <input
                type="file"
                // value={img}
                onChange={(e) => setImg(e.target.files[0])}
                name="fields[images][]"
              /> */}
            </label>
          </div>
          <div className="grid grid-flow-col gap-4">
            <label htmlFor="" className="w-full">
              <p className="pl-1">State</p>
              <select
                className="bg-gray-100 rounded-md p-2 my-2 w-full"
                name="category"
                value={state}
                onChange={(e) => setState(e.target.value)}
                id="fields[state]"
              >
                <option value="Maharashtra">Maharashtra</option>
                <option value="Madhyapradesh">Madhyapradesh</option>
                <option value="Goa">Goa</option>
                <option value="Hariyana">Hariyana</option>
                <option value="Tamilnadu">Tamilnadu</option>
                <option value="Karnataka">Karnataka</option>
              </select>
            </label>
            <label htmlFor="" className="w-full">
              <p className="pl-1">District</p>
              <select
                className="bg-gray-100 rounded-md p-2 my-2 w-full"
                name="category"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                id="fields[district]"
              >
                <option value="Pune">Pune</option>
                <option value="Satara">Satara</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Sangli">Sangli</option>
                <option value="Kolhapur">Kolhapur</option>
                <option value="Solapur">Solapur</option>
              </select>
            </label>
            <label htmlFor="" className="w-full">
              <p className="pl-1">Taluka</p>
              <select
                className="bg-gray-100 rounded-md p-2 my-2 w-full"
                name="category"
                id="fields[taluka]"
                value={taluka}
                onChange={(e) => setTaluka(e.target.value)}
                placeholder="select"
              >
                <option value="Satara">Satara</option>
                <option value="Karad">Karad</option>
                <option value="Wai">Wai</option>
                <option value="Mahabaleshwar">Mahabaleshwar</option>
                <option value="Phaltan">Phaltan</option>
                <option value="Man">Man</option>
                <option value="Koregaon">Koregaon</option>
                <option value="Khatav">Khatav</option>
                <option value="Patan">Patan</option>
                <option value="Jaoli">Jaoli</option>
                <option value="Khandala">Khandala</option>
              </select>
            </label>
            <label htmlFor="" className="w-full">
              <p className="pl-1">Village</p>
              <select
                className="bg-gray-100 rounded-md p-2 my-2 w-full"
                name="category"
                id="fields[village]"
                placeholder="select"
                value={village}
                onChange={(e) => setVillage(e.target.value)}
              >
                <option value="Wai">Wai</option>
                <option value="Kusgaon">Kusgaon</option>
                <option value="Pasarni">Pasarni</option>
                <option value="Eksar">Eksar</option>
                <option value="Vithhalwadi">Vithhalwadi</option>
              </select>
            </label>
          </div>
          <label htmlFor="">
            <p className="pl-1">Expected Price(Range in Rs.)</p>
            <input
              type="text"
              placeholder="50-60"
              className="pl-1 text-gray-500 bg-slate-100 rounded-md w-full p-2"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label htmlFor="">
            <p className="pl-1">Description</p>
            <textarea
              name="description"
              id=""
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="pl-1 text-gray-500 bg-slate-100 rounded-md w-full p-2"
            ></textarea>
          </label>
          <div className="grid grid-flow-col justify-items-start gap-5">
            <label htmlFor="" className="w-full">
              <p className="pl-1">Contact Person</p>
              <input
                type="text"
                placeholder="name"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                className="pl-1 text-gray-500 bg-slate-100 rounded-md w-full p-2"
              />
            </label>
            <label htmlFor="" className="w-full">
              <p className="pl-1">Contact Number</p>
              <input
                type="tel"
                value={contact_number}
                onChange={(e) => setContact_Number(e.target.value)}
                placeholder="e.g. +91-9876543210"
                className="pl-1 text-gray-500 bg-slate-100 rounded-md w-full p-2"
              />
            </label>
          </div>
          <label htmlFor="">
            <p className="pl-1">Address</p>
            <textarea
              name="address"
              id=""
              rows="5"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="pl-1 text-gray-500 bg-slate-100 rounded-md w-full p-2"
              placeholder="street name, area, landmark, etc."
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-yellow-400 p-2 mb-5 rounded-lg w-20 text-center text-white hover:bg-yellow-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Seller;
