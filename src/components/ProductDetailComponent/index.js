import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 760px) {
        flex-direction: column;
        align-items: center;
      }
`

const Image = styled.img`
    width: 300px;
    height: 300px;
    border: .5px solid #a1a1a1;
    border-radius: 5px;

    @media only screen and (max-width: 760px) {
        width: 300px;
        height: 300px;
      }
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
`

const Title = styled.h1`
    font-weight: bold;
    font-size: 1.7em;
`

const Desciption = styled.p`

`

const StyledIndicator = styled.div`
    width: 24px;
    height: 24px;
    border: 1px solid #a1a1a1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

    :not(:first-child){
        border-left: 0px;
    }
`

const IndicatorWrapper = styled.div`
    display: flex;
`

const SubmitButton = styled.button`
    width: fit-content;
    background-color: #22D0B2;
    border: unset;
    border-radius: 5px;
    color: #fff;
    padding: 5px 10px;
    text-align: center;
    margin-top: 20px;
`

const Price = styled.div`
    font-weight: bold;
    color: red;
    margin-top: 15px;
`

const ProductDetailComponent = props => {

    const formatMoney = (price) => {
        const number = new Number(price);
        return number.toLocaleString('en-US', {
            style: 'decimal',
          })
    }

    return (
        <Wrapper>
            <Image src={props.image} alt="" />
            <TextWrapper>
                <Title>{props.title}</Title>
                <Desciption>{props.description}</Desciption>
                <Price>฿{formatMoney(props.price)}</Price>
                <IndicatorWrapper>
                    <StyledIndicator onClick={props.minus}>-</StyledIndicator>
                    <StyledIndicator>{props.quantity}</StyledIndicator>
                    <StyledIndicator onClick={props.plus}>+</StyledIndicator>
                </IndicatorWrapper>
                <SubmitButton>Add to Cart</SubmitButton>
            </TextWrapper>
        </Wrapper>
    )
}

export default ProductDetailComponent;