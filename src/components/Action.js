import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Action = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? 'var(--green)' : '#000')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '1em 4em' : '.75em 1.75em')};
    color: ${({dark}) => (dark ? '#000' : "#fff")};
    font-size: ${({fontBig}) => (fontBig ? '1.25em' : "1em")};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: alll .2 ease-in-out;

    &:hover {
        transition: alll .2 ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#000')};
        color: ${({primary}) => (primary ? "#000" : '#fff')};
    }
`;