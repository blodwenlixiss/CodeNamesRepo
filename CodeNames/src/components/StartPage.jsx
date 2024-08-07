import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function StartPage() {
  const [username, setUsername] = useState("");
  const [joinUser, setJoinUser] = useState("");
  const navigate = useNavigate();

  const handleCreateRoom = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://codenamees.azurewebsites.net/api/room/${username}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const gameId = data.id;
      console.log(data);
      navigate(`/room/${gameId}`);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <main>
      <section id="code-name">
        <div className="bg-img">
          <div className="page-container">
            <div className="char-man"></div>
            <div className="game-info flex flex-col items-center gap-10">
              <div className="title flex flex-col items-center gap-10">
                <h1 className="text-6xl font-bold text-center leading-relaxed text-black">
                  კოდური სახელები
                  <span className="block text-amber-300">ONLINE</span>
                </h1>
                <p className="text-4xl font-bold text-black">
                  ითამაშე მეგობრებთან ერთად
                </p>
              </div>
              <div className="create-join flex justify-center flex-col items-center gap-10">
                <div className="create-room">
                  <input
                    type="text"
                    placeholder="ჩაწერე სახელი"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    id="createRoom"
                    onClick={handleCreateRoom}
                    className="text-2xl mt-8 font-bold text-white p-4 rounded-full"
                  >
                    შექმენით ოთახი
                  </button>
                </div>
                <span className="font-bold text-xl">ან</span>
                <div className="create-room">
                  <input
                    type="text"
                    value={joinUser}
                    onChange={(e) => setJoinUser(e.target.value)}
                    placeholder="სახელი"
                  />
                  <input
                    type="text"
                    placeholder="Room ID"
                    className="code-input"
                  />
                  <button
                    type="submit"
                    className="w-full active:w-11/12 bg-amber-500 text-white font-bold rounded-md p-3 mt-2"
                  >
                    შესვლა
                  </button>
                </div>
              </div>
            </div>
            <div className="char-wman"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
