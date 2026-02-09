import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useCart } from "../context/StaffOrder";
import { MdDeleteForever } from "react-icons/md";

const StaffOrder = () => {
  const [menuSelection, setMenuSelection] = useState("Starters");
  const [search, setSearch] = useState("")

  const {addToCart, removeFromCart,cart} = useCart()
 const menuData = {
  Starters: [
    { id: "st-1", name: "Paneer Tikka", price: 220 },
    { id: "st-2", name: "Veg Manchurian Dry", price: 190 },
    { id: "st-3", name: "Chicken Seekh Kebab", price: 250 },
    { id: "st-4", name: "Hara Bhara Kabab", price: 180 },
    { id: "st-5", name: "Chilli Paneer", price: 180 },
  ],
  "Main Course": [
    { id: "mc-1", name: "Paneer Butter Masala", price: 260 },
    { id: "mc-2", name: "Veg Kolhapuri", price: 240 },
    { id: "mc-3", name: "Dal Tadka", price: 190 },
  ],
  Drinks: [
    { id: "dr-1", name: "Cold Drink", price: 80 },
    { id: "dr-2", name: "Fresh Lime Soda", price: 90 },
  ],
};


  const Categories = [
    { name: "Starters", path: "/Starters" },
    { name: "Main Course", path: "/mainCourse" },
    { name: "Drinks" },
    { name: "Desserts" },
    { name: "Breads" },
    { name: "Rice & Biryani" },
    { name: "Salads" },
  ];


  const filteredItems = (menuData[menuSelection] || []).filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
);


  return (
    <>
      <div className="  bg-gray-50 px-4">
        <h2 className="text-black font-bold text-2xl pt-3">Billing & Orders</h2>
        <p className="text-gray-400 font-semibold ">
          Create bills for dine-in, takeway, and online orders
        </p>

        <div className="flex flex-col lg:flex-row  gap-4">
          <div className="left w-full lg-w-3/4  ">
            <div className="search bg-white p-3 my-5 border border-gray-300">
              <input
                type="text"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search menu"
                className="w-full p-3 border outline-none focus:border-gray-400 border-gray-200 rounded-2xl"
              />
            </div>

            <div className="menu border border-gray-300 p-5 bg-white">
              <h3 className="font-bold ms-2 text-green-600">{menuSelection}</h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 p-2">
                {filteredItems.map((item) => (
                  <>
                    <div className="border border-gray-300 me-3 py-3 mb-2 rounded-xl ">
                      <div className="flex justify-between items-center ">
                        <div className="div ms-3 space-y-2">
                          <h3>{item.name}</h3>
                          <p>₹ {item.price}</p>
                        </div>

                        <div className="bg-white p-3" onClick={() => addToCart(item)}>
                          <IoMdAdd />
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="right  pt-5">
            <div className="flex flex-col w-full lg-w-1/4">
              <div className="border border-gray-300 rounded-2xl bg-white">
                <h3 className="font-bold text-green-400 text-2xl py-2 ms-3">
                  Categories
                </h3>
                <div className="grid grid-cols-2 p-2">
                  {Categories.map((item) => (
                    <>
                      <div
                        className="border-2 border-gray-300 me-3 py-3 mb-2 rounded-xl cursor-pointer"
                        onClick={() => setMenuSelection(item.name)}
                      >
                        <div className="text-center font-semibold text-amber-700 ">
                          <h3 >{item.name}</h3>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>

              <div className="cart py-3 mb-3">
                <div className="border border-gray-300 p-3 rounded-2xl bg-white">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-2xl text-amber-600 ms-3 py-3">
                      Cart
                    </h3>

                    <button className="px-2 py-1 bg-black text-white rounded-3xl">
                      {cart.length} items
                    </button>
                  </div>

                  {cart.length === 0 ? <><p className="font-semibold text-gray-400  text-center">
                    No items added yet
                  </p> </> : <>
                  

                  {cart.map((i) => <div className="p-4">

                    <div className="flex justify-between items-center">
 <h3 className="">{i.name}</h3>
 

                           <div className="delete" onClick={() => removeFromCart(i.id)}>
                              <MdDeleteForever />
                           </div>
                    

                    </div>

               

                   
                  </div>)}

                     <button className="bg-orange-400 text-xl text-white  rounded-3xl px-2 py-1 w-full ">Proceed To Bill</button>
                  
                  
                  </>}

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffOrder;
