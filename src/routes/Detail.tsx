// 이 파일은 글 상세 화면을 담당하는 컴포넌트 파일

import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Article, BackLink, Body, Container, Loading, PostMeta, Title } from "./DetailStyle.ts";
import type { Post } from "./Home.tsx";

// type Post = {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// };
// Home.tsx에서 타입을 수입해봤음
// 단점은 경로가 바뀌었을 때나 홈의 상태가 바뀌면 불러오지 못할 수도 있으니
// 타입의 태그를 만드는 게 권장됨

function Detail() {
    const { id } = useParams();

    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(json => {
                setPost(json);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    if (loading) {
        return <Loading>본문을 불러오는 중입니다...</Loading>;
    }

    if (!post) {
        return <Loading>존재하지 않는 게시글입니다.</Loading>;
    }

    return (
        <Container>
            <BackLink to={"/"}>&larr; 목록으로 돌아가기 &darr;</BackLink>

            <Article>
                <Title>{post.title}</Title>
                <PostMeta>
                    <span>게시물 번호 : {post.id}</span>
                    <span style={{ margin: "0 12px" }}>/</span>
                    <span>작성자 : {post.userId}</span>
                </PostMeta>
                <Body>{post.body}</Body>
            </Article>
        </Container>
    );
}

export default Detail;
