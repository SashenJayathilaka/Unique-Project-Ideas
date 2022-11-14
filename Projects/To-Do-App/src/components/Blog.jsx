import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  writeBatch,
} from "firebase/firestore";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import IsChecked from "./IsChecked";
import ToDoInput from "./ToDoInput";
import FlipMove from "react-flip-move";

const Blog = ({ id }) => {
  const [getTodo, setGetTodo] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(firestore, "users", id, "todo"),
          orderBy("timestamp", "asc")
        ),
        (snapshot) => setGetTodo(snapshot.docs)
      ),
    [firestore, id]
  );

  /* console.log(getTodo); */
  /* console.log(passCheckId); */

  const onDeleteComment = async (todo) => {
    try {
      const batch = writeBatch(firestore);

      const commentDocRef = doc(firestore, "users", id, "todo", todo.id);
      batch.delete(commentDocRef);

      const secondCommentDocRef = doc(
        firestore,
        "users",
        id,
        "todo",
        todo.id,
        "check",
        todo.id
      );
      batch.delete(secondCommentDocRef);

      await batch.commit();
    } catch (error) {
      console.log("CommentDelete Error", error);
    }
  };

  const checkTodo = async (todo) => {
    try {
      await setDoc(
        doc(firestore, "users", id, "todo", todo.id, "check", todo.id),
        {
          username: user?.displayName,
        }
      );
    } catch (error) {
      console.log(error);
    }
    /*  setIsCheck(false); */
  };

  const unCheckTodo = async (todo) => {
    try {
      await deleteDoc(
        doc(firestore, "users", id, "todo", todo.id, "check", todo.id)
      );
    } catch (error) {
      console.log(error);
    }
    /* setIsCheck(true); */
  };

  return (
    <>
      <div className="flex w-full h-auto">
        <div className="h-auto  w-full bg-gray-700 rounded-lg p-4">
          <div className="flex flex-1 justify-center mr-auto p-4">
            <ToDoInput id={id} />
          </div>
          <hr />

          <div className="mt-3 text-xl text-white flex justify-between items-center">
            <p className="font-bold">{moment().format("ddd DD-MMM-YYYY")}</p>
            <p className="text-4xl font-bold  text-gray-100 animate-pulse mr-20">
              To Do List
            </p>
            <p className="set_time">{moment().format("hh:mm A")}</p>
          </div>

          <div className="w-full mt-4 flex text-sm flex-col text-center justify-center ">
            <div className=" px-[15px] flex justify-between text-center items-center ">
              <p>s</p>
              <p>m</p>
              <p>t</p>
              <p>w</p>
              <p>t</p>
              <p>f</p>
              <p>s</p>
            </div>
            <div className="w-full pl-1 flex justify-between text-center items-center text-white">
              <span className="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#000] flex justify-center items-center">
                <p>24</p>
              </span>
              <span className="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#000] flex justify-center items-center">
                <p>25</p>
              </span>
              <span className="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#000] flex justify-center items-center">
                <p>26</p>
              </span>
              <span className="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#000] flex justify-center items-center">
                <p>27</p>
              </span>
              <span className="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#000] flex justify-center items-center">
                <p>28</p>
              </span>
              <span className="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#000] flex justify-center items-center">
                <p>29</p>
              </span>
              <span className="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#000] flex justify-center items-center">
                <p>30</p>
              </span>
            </div>
          </div>
          <ul className="my-4 ">
            {getTodo.map((todo) => (
              <IsChecked
                id={id}
                todo={todo}
                checkTodo={checkTodo}
                unCheckTodo={unCheckTodo}
                onDeleteComment={onDeleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Blog;
