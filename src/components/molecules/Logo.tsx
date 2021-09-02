import styled from '@emotion/styled';
const full_logo1 = 'images/full_logo1.svg';
const Full_Logo = styled.img`
    width: 168px;
    height: 50px;
    border: none;
    src: url(${full_logo1});
    margin: 0;
`;
export const Logo = () => {
    return (
        <div>
            <img
                src={full_logo1}
                width="168"
                height="50"
                style={{ border: 'none', position: 'fixed', top: '28px', left: '28px', margin: '0' }}
            />
            <Full_Logo />
        </div>
    );
};
