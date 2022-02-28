
import React from 'react'
import CustomTitle from '../custom-title/customTitle'
import ProductCard from '../product-card/productCard'


function CartSection() {
    return (
        <div style={{
            marginTop: 20,
            marginBottom: 20,
        }}>

            <CustomTitle content={'Your Cart'} />


            <ProductCard
                warning={true}
                warningText={'Bummer. We only have 3 in stock.'}
            />
            <ProductCard
                warning={true}
                warningText={'We can’t let you drink on an empty stomach. Please add $10 of food to enable alcohol delivery'}
            />
            <ProductCard />





        </div>
    )
}

export default CartSection