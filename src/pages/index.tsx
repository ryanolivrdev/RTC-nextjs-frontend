import { type NextPage } from "next";
import Head from "next/head";

import { ChatContainer } from "../containers/ChatContainer";
import { UserHeader } from "../components/UserHeader";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { PaperPlaneRight } from "phosphor-react";
import { ChatBox } from "../components/ChatBox";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chat</title>
        <meta name="description" content="chat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChatContainer>
        <div className="flex min-h-full flex-col">
          <UserHeader name="Ana Caetano" status="online" />

          <Text className="self-center">Hoje 11:30</Text>
          <ChatBox userName="Ana Caetano" mode="receiving" time="18:18" message="Tive uma ideia incrível para um projeto! 😍" />
          <ChatBox userName="hmmhm" mode="sending" time="18:18" message="Sério? Me conta mais." />
        </div>

        <TextInput.Root>
          <TextInput.Input placeholder="Digite sua mensagem" />

          <TextInput.Icon>
            <PaperPlaneRight size={24} className="cursor-pointer" />
          </TextInput.Icon>
        </TextInput.Root>
      </ChatContainer>
    </>
  );
};

export default Home;
