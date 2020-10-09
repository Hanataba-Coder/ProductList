import React, { useEffect, useState }  from 'react'
import { Row, Col, Divider } from 'antd';
import Card from '../Card';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../../redux';

const ProductList = props => {
    const product = useSelector(state => state.product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <Row gutter={[24, 24]}>
        {
            product.products.products.length > 0 ? product.products.products.map(data => (
                <Col key={data._id} lg={props.grid ? 6 : 24} md={props.grid ? 8 : 24} sm={props.grid ? 12 : 24} xs={24}>
                    <Card
                        id={data._id}
                        grid={props.grid}
                        image={data.image_url}
                        logo={data.brand_info.url}
                        description={data.description}
                        title={data.name}
                        price={data.price}
                    /> 
                </Col>
            ))
            :
            <div>Loading...</div>
        }
        </Row>
    )
}

export default ProductList