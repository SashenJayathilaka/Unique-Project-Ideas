import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Backdrop from "@mui/material/Backdrop";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Tooltip from "@mui/material/Tooltip";
import { collection, onSnapshot } from "firebase/firestore";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";
import UpdateModel from "./UpdateModel";
import FlipMove from "react-flip-move";

function IsChecked({ checkTodo, unCheckTodo, todo, id, onDeleteComment }) {
  const [check, setCheck] = useState([]);
  const [checkId, setCheckId] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /* console.log(checkId, "yoooooooooooo"); */

  useEffect(
    () =>
      onSnapshot(
        collection(firestore, "users", id, "todo", todo.id, "check"),
        (snapshot) => setCheck(snapshot.docs)
      ),
    [firestore, id]
  );

  useEffect(() => {
    try {
      check.findIndex((like) => {
        setCheckId(like.id);
      });
    } catch (error) {
      console.log(error);
    }
  }, [check]);

  return (
    <>
      <FlipMove
        staggerDurationBy={30}
        duration={750}
        delay={30}
        /*         enterAnimation="accordionVertical"
        leaveAnimation="accordionVertical" */
      >
        <li className=" mt-4" id="1" key={todo.id}>
          <div className="flex gap-2">
            <div className="w-9/12 h-auto bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3">
              {todo.id === checkId ? (
                <>
                  <div className=" w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center">
                    <span
                      className="strike_none w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center"
                      onClick={() => unCheckTodo(todo)}
                    >
                      <i className="text-green-500">
                        <CheckCircleIcon />
                      </i>
                    </span>
                  </div>

                  <strike className="text-2xl ml-4 text-gray-900 font-semibold rounded-full">
                    {todo.data().todo}
                  </strike>
                </>
              ) : (
                <>
                  <div className=" w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center">
                    <span
                      className=" w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center"
                      onClick={() => checkTodo(todo)}
                    >
                      <i className="text-white">
                        <CheckCircleIcon />
                      </i>
                    </span>
                  </div>

                  <p className="text-2xl ml-4 text-gray-900 font-semibold rounded-full">
                    {todo.data().todo}
                  </p>
                </>
              )}
            </div>

            <div className="flex  justify-end m-auto items-center cursor-pointer  bg-yellow-500 rounded-full hover:bg-white">
              <Tooltip title="Update">
                <IconButton onClick={handleOpen} disabled={todo.id === checkId}>
                  <EditIcon className="text-white hover:text-black" />
                </IconButton>
              </Tooltip>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <UpdateModel
                  open={open}
                  todo={todo}
                  id={id}
                  handleClose={handleClose}
                />
              </Modal>
            </div>

            <div className="flex justify-end m-auto items-center cursor-pointer bg-red-500 rounded-full hover:bg-white">
              <Tooltip title="Delete">
                <IconButton>
                  <DeleteIcon
                    onClick={() => onDeleteComment(todo)}
                    className={
                      todo.id === checkId
                        ? `text-white hover:text-black animate-pulse`
                        : `text-white hover:text-black`
                    }
                  />
                </IconButton>
              </Tooltip>
            </div>

            {todo.id === checkId ? (
              <>
                <strike className="w-60 h-10 m-auto bg-[#e0ebff] rounded-[7px] flex justify-center text-xl text-gray-900 font-semibold items-center ">
                  {moment(todo.data().date).format("D MMMM YYYY")}
                </strike>
                <strike className="w-40 h-10  m-auto bg-[#e0ebff] rounded-[7px] flex justify-center text-xl text-gray-900 font-semibold items-center ">
                  {todo.data().time}
                </strike>
              </>
            ) : (
              <>
                <span className="w-60 h-10 m-auto bg-[#e0ebff] rounded-[7px] flex justify-center text-xl text-gray-900 font-semibold items-center ">
                  {moment(todo.data().date).format("D MMMM YYYY")}
                </span>
                <span className="w-40 h-10  m-auto bg-[#e0ebff] rounded-[7px] flex justify-center text-xl text-gray-900 font-semibold items-center ">
                  {todo.data().time}
                </span>
              </>
            )}
          </div>
        </li>
      </FlipMove>
    </>
  );
}

export default IsChecked;
