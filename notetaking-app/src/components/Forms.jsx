import React from "react";

function Forms() {
  return (
    <form action="" className="text-center m-4">
      <div>
        <input type="text" placeholder="Enter Notes" className="border-4 p-2 rounded" />
        <button className="bg-orange-200 p-2 rounded ml-2">Add</button>
      </div>
    </form>
  );
}

export default Forms;
