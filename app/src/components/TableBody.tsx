"use client"
import { responceData } from "@/app/contents/page";
import { Td, Tr } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { io } from "socket.io-client";

interface TBodyProps {
    contents: responceData[]
}

export const TableBody: FC<TBodyProps> = ({ contents }) => {

    const [tableContents, setTableContent] = useState<TBodyProps["contents"]>(contents)
    const socket = io({ autoConnect: false });


    const fetching = async () => {
        const req = await fetch('/api/contents');
        const { contents } = await req.json();
        setTableContent((contents ?? []) as responceData[]);
    };

    useEffect(() => {
        fetch('/api/socketio', { method: 'POST' })
            .then(() => {
                // 既に接続済だったら何もしない
                if (socket.connected) {
                    return;
                }
                // socket.ioサーバに接続
                socket.connect();
                socket.on('sync', () => {
                    console.log('sync');
                    fetching();
                });
                fetching();
            });

        return () => {
            // 登録したイベントは全てクリーンアップ
            socket.off('connect');
            socket.off('msg');
        };
    }, []);


    return <>
        {tableContents.map((item, index) => (
            <Tr key={index}>
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td>{item.email}</Td>
                <Td>{item.content_question}</Td>
                <Td>{item.postdate}</Td>
            </Tr>
        ))}
    </>
}