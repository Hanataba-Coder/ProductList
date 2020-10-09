import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.grid ? `column` : `row`};
    width: 100%;
    height: ${props => props.grid ? `550px` : `auto`};
    box-shadow: 0 0px 4px 0 rgba(0,0,0,0.2);

    :hover {
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
    }
`

const DetailWrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.grid ? `column` : `row`};
    justify-content: space-between;
    width: ${props => props.grid ? `100%` : `90%`};
    height: 50%;
    padding: 20px;
`

const StyledImage = styled.img`
    width: ${props => props.grid ? `100%` : `10%`};
    height: ${props => props.grid ? `50%` : `auto`};
`

const StyledButton = styled.button`
    width: 100%;
    background-color: #22D0B2;
    border: unset;
    border-radius: 5px;
    color: #fff;
    padding: 5px;
    text-align: center;
`

const TitleWrap = styled.div`
    display: flex;
    margin-bottom: 10px;
`

const TextTitle = styled.h3`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const TextDetailWrap = styled.p`
    line-height: 1.5em;
    height: ${props => props.grid ? `3em` : `4.5em`};       /* height is 2x line-height, so two lines will display */
    overflow: hidden;
`

const BrandImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 5px;
    margin-right: 10px;
`

const FirstWrapper = styled.div`
    width: ${props => props.grid ? `100%` : `95%`};
    padding-right: ${props => props.grid ? `0` : `100px`};
`

const SecondWrapper = styled.div`
    width: ${props => props.grid ? `100%` : `5%`};
`

const Card = props => {

    const formatMoney = (price) => {
        const number = new Number(price);
        return number.toLocaleString('en-US', {
            style: 'decimal',
          })
    }

    return (
        <Wrapper grid={props.grid} >
            <StyledImage grid={props.grid}  src={props.image}/>
            <DetailWrapper grid={props.grid}>
                <FirstWrapper grid={props.grid}>
                    <TitleWrap>
                        <BrandImage src={props.logo} alt=""/>
                        <TextTitle><b>{props.title}</b></TextTitle> 
                    </TitleWrap>
                    <TextDetailWrap grid={props.grid}>{props.description}</TextDetailWrap>
                </FirstWrapper>
                <SecondWrapper grid={props.grid}>  
                    <div
                        style={{
                            color: 'red',
                            fontWeight: 'bold',
                            textAlign: props.grid ? 'end' : 'center',
                            marginBottom: '20px'
                        }}
                    >
                        ฿{formatMoney(props.price)}
                    </div>
                    <Link to={`productDetail?id=${props.id}`} >
                      <StyledButton>Detail</StyledButton>
                    </Link>
                </SecondWrapper>
            </DetailWrapper>
        </Wrapper>
    )
}

export default Card;

