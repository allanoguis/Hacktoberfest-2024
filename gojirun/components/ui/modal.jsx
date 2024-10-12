import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trophy } from "lucide-react";
import Player from "../leaderboard"; // all the info from APP will be migrated here once wrapped up
// import AllGames from "@/app/allgames/page";

export const HighScoreModal = ({ isOpen, onClose, title, children }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-full h-screen w-screen m-0 p-0"
        aria-describedby="highscore-modal"
      >
        <DialogHeader className="p-6 border-b">
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        <div
          className="p-9 overflow-y-auto h-[calc(100vh-140px)]"
          id="highscore-modal-header"
        >
          {children}
        </div>
        <div className="p-6 border-t">
          <Button onClick={onClose} className="w-full">
            Close Modal
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

function HighscoreButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="hover:bg-accent transition-all duration-500"
            onClick={() => setIsOpen(true)}
          >
            <Trophy className="inline-block mr-2 h-4 w-4" />
            Leaderboard
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-full h-screen w-screen m-0 p-0">
          <DialogHeader className="p-6 border-b">
            <DialogTitle className="text-2xl font-bold">
              Leaderboard
            </DialogTitle>
          </DialogHeader>
          <div className="p-6 overflow-y-auto h-[calc(100vh-140px)]">
            <Player />
            {/* <AllGames /> */}
          </div>
          <div className="p-12 border-t">{/* modal footer content */}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default HighscoreButton;
