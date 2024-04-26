import { TableBody } from "@/components/TableBody"
import { Center, Heading, NativeTable as Table, Thead, Tbody, Tr, Th } from "@yamada-ui/react"

export interface responceData {
    id: number
    name: string
    email: string
    content_question: string
    postdate: string
}
const Page = async () => {

    // useState内に格納しなくてもこれでgetServerSidePropsみたいなことができる。
    const response = await fetch("http:localhost:3000/api/contents", {
        cache: "no-store", // キャッシュせずに最新のデータをとってくる
    })
    const { contents } = await response.json() as { contents: responceData[] }

    return <Center w="full" flexDirection="column">
        <Heading py={5}>お問合せ一覧</Heading>
        <Table>
            <Thead>
                <Tr>
                    <Th>No.</Th>
                    <Th>名前</Th>
                    <Th>メール</Th>
                    <Th>内容</Th>
                    <Th>時間</Th>
                </Tr>
            </Thead>
            <Tbody>
                <TableBody contents={contents} />
            </Tbody>
        </Table>
    </Center>
}

export default Page