"use client"
import { Box, Button, Center, Label as FormLabel, Heading, Input, Textarea } from "@yamada-ui/react"
import { ChangeEvent, FormEvent, useState } from "react"
import { io } from "socket.io-client";

export default function Home() {
  const socket = io({ autoConnect: false });

  const [userName, setUserName] = useState<string>("")
  const userNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.currentTarget.value)
  }
  const [userEmail, setUserEmail] = useState<string>("")
  const userEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.currentTarget.value)
  }
  const [userContent, setUserContent] = useState<string>("")
  const userContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUserContent(e.currentTarget.value)
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      // 送信処理
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
          content: userContent
        })
      })

      const json = await response.json()
      console.log(json.message);

      if (response.status === 200) {
        setUserName("")
        setUserEmail("")
        setUserContent("")
        await fetch('/api/socketio', { method: 'POST' });
        // 既に接続済だったら何もしない
        if (socket.connected) {
          return;
        }
        // socket.ioサーバに接続
        socket.connect();
        socket.emit('onSubmit'); // 送信
      }
    } catch (error) {
      console.log("送信失敗", error);
    }


  }
  return (
    <Center w="full" flexDir="column">
      <Heading py={5}>お問合せフォーム</Heading>
      <form onSubmit={onSubmit} style={{ width: "100%" }}>
        <Center gap={3} flexDir="column">
          <Box w="40%" minW="250px">
            <FormLabel htmlFor='name'>名前</FormLabel>
            <Input id='name' placeholder='名前' value={userName} onChange={userNameChange} />
          </Box>
          <Box w="40%" minW="250px">
            <FormLabel htmlFor='email'>メールアドレス</FormLabel>
            <Input id='email' placeholder='メールアドレス' value={userEmail} onChange={userEmailChange} />
          </Box>
          <Box w="40%" minW="250px">
            <FormLabel htmlFor='content'>内容</FormLabel>
            <Textarea id='content' placeholder='内容' value={userContent} onChange={userContentChange} />
          </Box>
          <Box w="40%" minW="250px" textAlign="center">
            <Button type="submit">送信</Button>
          </Box>
        </Center>
      </form>
    </Center>
  )
}
