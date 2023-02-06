import Image from "next/image";

import DefaultUser from "../assets/DefaultUser.jpg";
import { Text } from "./Text";
import { clsx } from "clsx";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter";
import { StatusColor } from "./StatusColor";
import { X } from "phosphor-react";

export interface UserHeaderProps {
  name: string;
  profilePicture?: string;
  status: "online" | "away" | "offline";
}

export function UserHeader({ name, status, profilePicture }: UserHeaderProps) {
  return (
    <div className="sticky flex justify-between backdrop-blur-[18px]">
      <div className="flex gap-4">
        <Image
          src={profilePicture || DefaultUser}
          alt=""
          className="rounded-full object-cover"
          width={48}
          height={48}
          quality={80}
        />
        <div>
          <Text className="font-bold" size="lg">
            {name}
          </Text>

          <div className="flex items-center gap-1">
            <StatusColor status={status} />
            <Text
              className={clsx({
                "text-green-200": status === "online",
                "text-yellow-600": status === "away",
                "text-red-600": status === "offline",
              })}
              size="sm"
            >
              {capitalizeFirstLetter(status)}
            </Text>
          </div>
        </div>
      </div>

      <X size={20} weight="bold" className="cursor-pointer" />
    </div>
  );
}
