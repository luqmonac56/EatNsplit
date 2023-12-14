import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";

function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];

  const [friends, setFriends] = useState(initialFriends);
  const [showForm, setShowForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowForm() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowForm(false);
  }

  function handleSelectFriend(friend) {
    setShowForm((showForm) => false);
    setSelectedFriend((curr)=>(curr?.id === friend.id ? null : friend))
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          selectedFriend={selectedFriend}
          onSelectFriend={handleSelectFriend}
          friends={friends}
        />

        {showForm && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowForm}>
          {showForm ? `Close` : `Add friend`}
        </Button>
      </div>

      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
}

export default App;
