import styled from '@emotion/styled';
const full_logo1 = 'images/full_logo1.svg';
import { colors } from '@/src/styles';

export const Header = styled.div`
    background: ${colors.header_color};
    color: ${colors.white};
    font-size: 18px;
    padding: 100px 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Full_Logo = styled.img`
    width: 168px;
    height: 50px;
    margin: 28px;
    background-image: url(${full_logo1});
    position: absolute;
    top: 0;
    left: 0;
`;
