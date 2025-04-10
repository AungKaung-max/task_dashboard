// import { Link, NavLink } from "react-router-dom";

// export default function SideNav() {
//   return (
//     <div className="flex h-full flex-col px-3 py-4 md:px-2">
//       <Link
//         className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
//         to="/"
//       >
//         <div className="w-32 text-white md:w-40">Logo</div>
//       </Link>
//       <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
//         <NavLink to="/" />
//         <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
//         <form>
//           <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
//             <div className="hidden md:block">Sign Out</div>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



import {
    //     Box,
    //     Button,
    //     Card,
    //     CardContent,
    //     IconButton,
    //     Typography,
    //     Grid,
    //   } from "@mui/material";
    //   import DeleteIcon from "@mui/icons-material/Delete";
      
    //   const boards = [
    //     {
    //       id: 1,
    //       name: "Project Alpha",
    //       lists: [
    //         {
    //           name: "To Do",
    //           tasks: ["Setup repo", "Design UI"]
    //         },
    //         {
    //           name: "In Progress",
    //           tasks: ["Develop API"]
    //         },
    //         {
    //           name: "Done",
    //           tasks: ["Create wireframe"]
    //         }
    //       ]
    //     },
    //     {
    //       id: 2,
    //       name: "Marketing Plan",
    //       lists: [
    //         {
    //           name: "To Do",
    //           tasks: ["Research competitors"]
    //         },
    //         {
    //           name: "In Progress",
    //           tasks: []
    //         },
    //         {
    //           name: "Done",
    //           tasks: ["Write pitch"]
    //         }
    //       ]
    //     }
    //   ];
      
    //   export default function BoardLists() {
    //     return (
    //       <Box p={4} bgcolor="#f5f5f5" minHeight="100vh">
    //         <Typography variant="h4" fontWeight="bold" mb={4} color="#333">
    //            My Project Boards
    //         </Typography>
      
    //         <Grid container spacing={3}>
    //           {boards.map((board) => (
    //             <Grid item xs={12} md={6} lg={4} key={board.id}>
    //               <Card
    //                 sx={{
    //                   borderRadius: 3,
    //                   boxShadow: 3,
    //                   background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
    //                 }}
    //               >
    //                 <CardContent>
    //                   <Box
    //                     display="flex"
    //                     justifyContent="space-between"
    //                     alignItems="center"
    //                     mb={2}
    //                   >
    //                     <Typography variant="h6" fontWeight="bold">
    //                       {board.name}
    //                     </Typography>
    //                     <IconButton size="small">
    //                       <DeleteIcon fontSize="small" />
    //                     </IconButton>
    //                   </Box>
      
    //                   {board.lists.map((list, idx) => (
    //                     <Box
    //                       key={idx}
    //                       mb={2}
    //                       p={2}
    //                       bgcolor="#fff8f0"
    //                       borderRadius={2}
    //                       boxShadow={1}
    //                     >
    //                       <Typography
    //                         variant="subtitle2"
    //                         fontWeight="bold"
    //                         color="#ff9800"
    //                         mb={1}
    //                       >
    //                         {list.name}
    //                       </Typography>
      
    //                       {list.tasks.length === 0 ? (
    //                         <Typography
    //                           variant="body2"
    //                           color="text.secondary"
    //                           fontStyle="italic"
    //                         >
    //                           No tasks yet
    //                         </Typography>
    //                       ) : (
    //                         list.tasks.map((task, taskIdx) => (
    //                           <Typography
    //                             key={taskIdx}
    //                             variant="body2"
    //                             sx={{ pl: 1, mb: 0.5 }}
    //                           >
    //                             • {task}
    //                           </Typography>
    //                         ))
    //                       )}
    //                     </Box>
    //                   ))}
    //                 </CardContent>
    //               </Card>
    //             </Grid>
    //           ))}
    //         </Grid>
    //       </Box>
    //     );
    //   }