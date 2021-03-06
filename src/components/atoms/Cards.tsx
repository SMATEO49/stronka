import styled from '@emotion/styled';

const Main = styled.div`
    background: #e6e8fa;
    color: #fff;
    padding: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Card = styled.div`
    background: #fff;
    padding: 0 0 50px 0;
    margin: 100px 40px;
    width: 15%;
    height: 350px;
`;

const CardImageOne = styled.div`
    margin-bottom: 20px;
    width: 100%;
    height: 200px;
    background-color: #ff8788;
`;
const CardImageTwo = styled.div`
    margin-bottom: 20px;
    width: 100%;
    height: 200px;
    background-color: #bbdc65;
`;
const CardImageThree = styled.div`
    margin-bottom: 20px;
    width: 100%;
    height: 200px;
    background-color: #65efdd;
`;

const CardTitle = styled.h2`
    padding: 15px 0;
    color: #15159b;
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
`;

const CardText = styled.p`
    padding: 0 10px;
    color: #808080;
    font-size: 12px;
    text-align: center;
`;

export const Cards = () => {
    return (
        <Main>
            <Card>
                <CardImageOne></CardImageOne>
                <CardTitle>Front-end</CardTitle>
                <CardText>
                    {' '}
                    HTML, CSS, JS? Te technologie same w sobie już nie wystarczają. Twórz korzystając z React
                </CardText>
            </Card>
            <Card>
                <CardImageTwo></CardImageTwo>
                <CardTitle>Cu tooling</CardTitle>
                <CardText> Czy korzystasz z narzędzi w terminalu? Odkryj ich moc i zacznij pisać swoje.</CardText>
            </Card>
            <Card>
                <CardImageThree></CardImageThree>
                <CardTitle>Automatyzacja</CardTitle>
                <CardText> Znasz drogę na skróty? Jeśli nie, pokażemy Ci jak użyć narzędzi low code.</CardText>
            </Card>
        </Main>
    );
};