"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/playerCard";
// import { db } from "../firebase";

// export async function getServerSideProps() {
//   const usersRef = db.collection("games");
//   const snapshot = await usersRef.get();
//   const users = snapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));

//   return {
//     props: { users },
//   };
// }

export const Leaderboard = ({ users }) => {
  return (
    <>
      <div>
        <ul>
          {/* {users.map((user) => (
            <Card key={user.id}>
              <CardHeader>
                <span>{user.name}</span> --> no user name reference with games collection
              </CardHeader>
              <CardContent>
                <span>{user.score}</span> --> no user score reference with games collection
              </CardContent>
              <CardFooter>
                <span>{user.email}</span> --> no user email reference with games collection
              </CardFooter>
            </Card>
          ))} */}{" "}
          TEST TEST
        </ul>
      </div>
    </>
  );
};

export default Leaderboard;
