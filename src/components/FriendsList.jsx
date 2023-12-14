import React from "react";
import Friend from "./Friend";

export default function FriendsList({
  friends,
  onSelectFriend,
  selectedFriend,
}) {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend
            selectedFriend={selectedFriend}
            onSelectFriend={onSelectFriend}
            friend={friend}
            key={friend.id}
          />
        ))}
      </ul>
    </div>
  );
}
