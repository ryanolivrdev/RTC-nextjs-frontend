import clsx from "clsx";

export interface StatusColorProps {
  status: "online" | "away" | "offline";
}

export function StatusColor({ status }: StatusColorProps) {
  return (
    <div
      className={clsx("h-2 w-2 rounded-full", {
        "bg-green-200": status === "online",
        "bg-yellow-600": status === "away",
        "bg-red-600": status === "offline",
      })}
    />
  );
}
