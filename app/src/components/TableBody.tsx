"use client"
import { responceData } from "@/app/contents/page";
import { ClientToServerEvents, ServerToClientEvents } from "@/socket.io/models";
import { Td, Tr } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

interface TBodyProps {
    contents: responceData[]
}

export const TableBody: FC<TBodyProps> = ({ contents }) => {

    const [tableContents, setTableContent] = useState<TBodyProps["contents"]>(contents)
    const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
        // サーバーのURLを指定
        'http://localhost:3001'
    );

    const fetching = async () => {
        const req = await fetch('/api/contents');
        const { contents } = await req.json();
        setTableContent((contents ?? []) as responceData[]);
    };

    useEffect(() => {
        (() => {
            socket.on('sync', () => {
                console.log('sync');
                fetching();
            });
            fetching();
        })();
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