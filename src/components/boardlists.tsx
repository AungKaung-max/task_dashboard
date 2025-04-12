import { Delete, Edit } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const BoardCard = ({
  board,
}: {
  board: { title: string; description: string };
}) => (
  <div className="bg-white rounded-xl shadow p-4 mb-4 cursor-pointer hover:shadow-md transition-shadow">
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-lg font-semibold">{board.title}</h2>
      <div className="flex gap-2">
        <button className="text-gray-500 hover:text-blue-600">
          <Edit fontSize="small" />
        </button>
        <button className="text-gray-500 hover:text-red-600">
          <Delete fontSize="small" />
        </button>
      </div>
    </div>
    <p className="text-sm text-gray-600">{board.description}</p>
  </div>
);

export default function BoardLists() {
  const [boards, setBoards] = useState<
    { title: string; description: string }[]
  >([]);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${API_BASE_URL}/api/v1/boards`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Fetched boards:", response.data);
        setBoards(response.data.data || []);
      } catch (error) {
        console.error("Error fetching boards:", error);
      }
    };

    fetchBoards();
  }, []);

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">My Boards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {boards.map((board, idx) => (
          <BoardCard key={idx} board={board} />
        ))}
      </div>
    </div>
  );
}
