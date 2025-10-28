import React from "react";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DeleteModal({ onConfirm, onClose }) {
  return (
    <div className="border p-2 ">
      <div className="align-middle text-center">
        <div className="justify-between mb-2">
          Remove Item
          <FontAwesomeIcon icon={faTimes} onClick={onClose} />
        </div>
        <div className="mb-2">Are You sure you want to remove item?</div>
        <div className="flex m-auto justify-center  gap-2">
          <button
            className="border p-2n text-white p-2 bg-green-700"
            onClick={onConfirm}
          >
            Remove
          </button>
          <button className="border p-2" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
