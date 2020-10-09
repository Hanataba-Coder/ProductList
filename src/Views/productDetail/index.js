import React, { useState, useEffect } from 'react'
import Aux from '../../components/Aux/Aux'
import styled from 'styled-components';
import { fetchProductDetail, initialQuantity, plusQuantity, minusQuantity } from '../../redux';
import { useSelector, useDispatch } from 'react-redux'
import { Divider } from 'antd';
import { Link } from 'react-router-dom';
import urijs from 'urijs';
import ProductDetailComponent from '../../components/ProductDetailComponent'

const Wrapper = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 60px;
`

const ProductDetail = props => {
    const productDetail = useSelector(state => state.product.detail.detail)
    const productDetailLoading = useSelector(state => state.product.detail.loadingDetail)
    const productQuanitity = useSelector(state => state.product.detail.quantity)
    const dispatch = useDispatch()

    useEffect(() => {
        const id = getIdFromUrl()
        dispatch(initialQuantity())
        dispatch(fetchProductDetail(id))
    }, [])

    const getIdFromUrl = () => {
        const id = urijs(window.location.href).query(true).id;
        return id;
    };

    return (
        <Aux>
            <Wrapper>
                <header>
                    <Link to="/" style={{marginRight: '10px'}}>
                        Home / 
                    </Link>
                    {productDetailLoading ? 'loading' : productDetail.name}
                </header>
                <Divider/>
                <section>
                {
                    productDetailLoading ? 'loading' :
                    <ProductDetailComponent 
                        image={productDetail.image_url} 
                        title={productDetail.name}
                        description={productDetail.description}
                        price={productDetail.price}
                        quantity={productQuanitity}
                        plus={() => dispatch(plusQuantity())}
                        minus={() => dispatch(minusQuantity())}
                    />
                }
                </section>
            </Wrapper>
        </Aux>
    )
}

export default ProductDetail;