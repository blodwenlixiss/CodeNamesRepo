import React from "react";
import { useParams } from "react-router-dom";

export default function RoomPage() {
  const { roomId } = useParams();

  return (
    <div>
      <h1>Room ID: {roomId}</h1>
      <h2>Welcome,!</h2>
      {/* Add more room functionality here */}
    </div>
  );
}
