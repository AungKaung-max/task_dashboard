import { Typography } from "@mui/material";
import Layout from "../layouts/layout";
import { CreateBoards } from "../components/buttons";
import BoardLists from "../components/boardlists";

function Dashboard() {
  return (
    <>
      <Layout>
        <div className="w-full">
          <div className="flex w-full items-center justify-between">
            <Typography sx={{ fontFamily: "Lusitana", fontSize: "1.2rem" }}>
              Boards
            </Typography>
          </div>
          <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            Searching
            <CreateBoards />
          </div>
          <BoardLists />
          <div className="mt-5 flex w-full justify-center">Pagination 12</div>
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;
