import React, { useState } from 'react'
import Aux from '../../components/Aux/Aux'
import styled from 'styled-components';
import { Divider } from 'antd';
import ProductList from '../../components/ProductList'

const TypeSelectionWrapprt = styled.div`
    display: flex;
    justify-content: flex-end;

    & :first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    & :not(:first-child){
        border-left: 0px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`

const StyledButton = styled.div`
    border: 1px solid #a1a1a1;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${props => props.active ? 
        `
            background: #22D0B2;
            color: #fff;
            border-color: #22D0B2;
        ` 
        : 
        `
            background: #fff;
        `
    }
`

const Wrapper = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 60px;
`

const Home = () => {

    const [grid, setGrid] = useState(true)

    return(
        <Aux>
            <Wrapper>
                <TypeSelectionWrapprt>
                    <StyledButton active={grid} onClick={() => setGrid(true)}><i className="fas fa-th-large"></i></StyledButton>
                    <StyledButton active={!grid} onClick={() => setGrid(false)}><i className="fas fa-list"></i></StyledButton>
                </TypeSelectionWrapprt>
                <Divider/>
                <ProductList grid={grid}/>
            </Wrapper>
        </Aux>
    )
}

export default Home;