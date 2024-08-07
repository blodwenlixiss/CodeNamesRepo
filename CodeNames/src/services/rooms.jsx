export const handleCreateRoom = async (e, username) => {
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
