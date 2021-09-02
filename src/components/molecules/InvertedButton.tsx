import styled from '@emotion/styled';

const Icon = styled.img<{ imagIcon: any }>`
    src: ${({ imagIcon }) => imagIcon};
    :hover {
        filter: invert(3%);
        box-shadow: 6px 6px 6px -1px black;
    }
`;

type Param = {
    ahref: any;
    imagIcon: any;
};

export const InvertedButton = ({ ahref, imagIcon }: Param) => {
    return (
        <a href={ahref} style={{ height: 50, width: 50 }}>
            <Icon imagIcon={imagIcon} />
        </a>
    );
};
