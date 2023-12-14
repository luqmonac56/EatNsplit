import React, { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({onAddFriend}) {
  const [name, setName] = useState(" ");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const id = crypto.randomUUID();

  if (name.length < 0 || image.length < 0) {
    return;
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newFriend = {
      name,
      image,
      balance: 0,
      id,
    };

    setName("");
    setImage("https://i.pravatar.cc/48");

    onAddFriend(newFriend)
  }

  return (
    <form onSubmit={handleSubmit} className="form-add-friend">
      <label htmlFor="">Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="">Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button >Add</Button>
    </form>
  );
}
