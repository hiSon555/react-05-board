import styled from "styled-components";
import { Link } from "react-router";

export const Loading = styled.div`
    text-align: center;
    padding: 100px;
    font-size: 1.1rem;
    color: #999;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 20px;
`;

export const BackLink = styled(Link)`
    color: #666;
    font-size: 14px;
    margin-bottom: 32px;
    padding: 8px 12px;
    border-radius: 6px;
    background: #f1f3f5;
    border: 1px solid #666666;
    
    &:hover {
        background-color: #e9ecef;
        color: #0077ff;
`;

export const Article = styled.article`
    padding-top: 40px;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 800;
    color: #111;
    margin-bottom: 24px;
`;

export const PostMeta = styled.div`
    color: #888;
    margin-bottom: 40px;
`;

export const Body = styled.div`
    font-size: 1.15rem;
    line-height: 1.8;
    white-space: pre-wrap;
`;

