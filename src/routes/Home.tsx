// 이 파일은 게시판 목록 화면을 담당하는 컴포넌트 파일

import { useEffect, useState } from "react";
import { Link } from "react-router";
import { BoardTable, Container, IdCell, Loading, TableRow, Title, TitleCell, UserIdCell } from "./HomeStyle.ts";
import type { Post } from "../types/Post.ts";

// 리액트에서의 "컴포넌트"라는 녀석은
function Home() {
    const [list, setList] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true); // 로딩 과정인지 아닌지를 boolean으로 저장

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then((json: Post[]) => {
                setList(json);
                setLoading(false);
            })
            .catch((err: unknown) => {
              if (err instanceof Error) {
                  console.log(err.message);
              } else {
                  console.log("알 수 없는 에러 : " + err);
              }
            });
    }, []);

    if (loading) {
        return <Loading>데이터를 로드 중입니다...</Loading>;
    }

    // useEffect를 통해서 최초 렌더링 이후에 useEffect 안의 함수를 실행하는데
    // 정상적으로 모든 작업이 끝났을 때, setLoading(false)를 통해 loading 값이 바뀌고
    // state 값이 바뀌었으므로 그 때, 이 아래에 있는 return이 화면에 리렌더링 됨

    return (
        <Container>
            <Title>커뮤니티 게시판</Title>
            <BoardTable>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자 ID</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((i, index) => (
                        <TableRow key={index}>
                            <IdCell>{i.id}</IdCell>
                            <TitleCell>
                                {/*
                                    HTML에서는 링크를 걸 때, <a href="사용자를 보낼 주소">
                                    a는 사용자를 이동시키는데,
                                    아예 페이지 전체를 다시 구성시켜버림
                                    리액트에서는 a 태그는 이 프로그램이 아닌 다른 곳 (ex, 구글, 네이버)에
                                    보내버릴 때에 사용해야 함

                                    이 리액트 안에서 사용자를 이동시킬 때 (경로만 달라질 때)엔
                                    react-router의 Link를 사용해야 함
                                */}
                                <Link to={`/${i.id}`}>{i.title}</Link>
                                </TitleCell>
                            <UserIdCell>{i.userId}</UserIdCell>
                        </TableRow>
                    ))}
                </tbody>
            </BoardTable>
        </Container>
    );
}

export default Home;