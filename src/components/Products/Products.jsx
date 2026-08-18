import styled from 'styled-components';

const Products = () => {

    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: #BF4F74;
    `;

    // Create a Wrapper component that'll render a <section> tag with some styles
    const Wrapper = styled.section`
        padding: 4em;
        background: papayawhip;
    `;

    // const Button = styled.button`
    //     color: #aabf4fff;
    //     font-size: 1em;
    //     margin: 1em;
    //     padding: 0.25em 1em;
    //     border: 2px solid #7cb83bff;
    //     border-radius: 3px;
    //     `;

    // const TomatoButton = styled(Button)`
    //     color: red;
    //     border-color: red;
    // `;


    const Button = styled.button`
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        background-color: ${props => props.btntype === 'primary' ? '#007bff' : '#6c757d'};
        color: white;
        cursor: pointer;
        `;

    return (
       <Wrapper>
            <Title>
                Hello World!
            </Title>
            <Button btntype="primary">Primary Button</Button>
            <br />
            <br />
            <Button>Secondary Button</Button>
       </Wrapper>
      );
}
 
export default Products;