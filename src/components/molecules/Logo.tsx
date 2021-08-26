import styled from '@emotion/styled';
const full_logo1 = 'images/full_logo1.svg';

const Full_Logo = styled.img`
    width: 168px;
    height: 50px;
    border-width: 10px;
    background-image: url(${full_logo1});
    position: absolute;
    top: 0;
    left: 0;
`;

export const Logo = () => {
    return (
        <img
            src={full_logo1}
            width="168"
            height="50"
            style={{ border: 'none', position: 'absolute', top: '0', left: '0', padding: '28' }}
        />
    );
};
