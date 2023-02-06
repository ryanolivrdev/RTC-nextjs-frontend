import clsx from "clsx";
import { onlyFirstWord } from "../helpers/onlyFirstWord";
import { Text } from "./Text";

export interface ChatBoxProps {
  message: string;
  userName: string;
  time: string;
  mode: "receiving" | "sending";
}

export function ChatBox({ message, userName, time, mode }: ChatBoxProps) {
  const firstName = onlyFirstWord(userName);

  return (
    <div
      className={clsx("flex flex-col gap-[0.625rem]", {
        "self-start": mode === "receiving",
        "self-end": mode === "sending",
      })}
    >
      <div>
        <Text size="sm">
          {mode === "receiving" ? firstName : "Você"} - {time}
        </Text>
      </div>

      <div
        className={clsx("p-[0.875rem]", {
          "h-fit w-fit rounded-r-lg rounded-bl-lg bg-purple-500":
            mode === "receiving",
          "h-fit w-fit rounded-l-lg rounded-br-lg bg-green-500":
            mode === "sending",
        })}
      >
        <Text size="sm">{message}</Text>
      </div>
    </div>
  );
}
