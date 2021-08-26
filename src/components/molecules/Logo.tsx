import styled from '@emotion/styled';
const full_logo1 = 'images/full_logo1.svg';

const Full_Logo = styled.img`
    width: 168px;
    height: 50px;
    margin: 28px;
    border: none;
    background-image: url(${full_logo1});
    position: absolute;
    top: 0;
    left: 0;
`;

export const Logo = () => {
    return <Full_Logo />;
};