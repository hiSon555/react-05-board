import styled from "styled-components";
import { Link } from "react-router";

export const Loading = styled.div`
    padding: 100px;
    text-align: center;
    font-size: 1.1rem;
    color: #999;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px 20px;
`;

export const Title = styled.h1`
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 24px;
    color: #111;
`;

export const BoardTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-top: 2px solid #333;

    th,
    td {
        padding: 16px 14px;
    }

    th {
        background-color: #f8f9fa;
        font-size: 14px;
        font-weight: 600;
        color: #444;
        border-bottom: 1px solid #dee2e6;
        text-align: center;
    }

    td {
        border-bottom: 1px solid #eee;
    }
`;

export const TableRow = styled.tr`
    transition: background-color 0.2s;

    &:hover {
        background-color: #f1f7ff;
    }
`;

export const IdCell = styled.td`
    width: 80px;
    text-align: center;
    color: #888;
`;

export const TitleCell = styled.td`
    text-align: left;
`;

export const UserIdCell = styled.td`
    text-align: center;
    color: #666;
`;

export const StyledLink = styled(Link)`
    color: #333333;

    &:hover {
        color: #191969;
    }
`;
