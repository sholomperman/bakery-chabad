import React, { useEffect, useState } from "react";
import axios from 'axios'
import InputNumber from './InputNumber'

const HomePageCard = ({className}) => {
    const [product, setProduct] = useState()
    
    useEffect(() => {
        try {
        const api = async () => {
            const { data } = await axios.get('http://localhost:1337/products');
            setProduct(data);
        };
        api();
        } catch (error) {
            console.log(error)
        }
    }, [])

    console.log(product)


    return (
    <>
            <div className='width: 100%; max-width: 1024px; flex justify-between mx-16 flex-wrap px-10'>
            {
                product?.map((item) => {
                    return (
                            <div className="flex justify-center mt-5">
                                <div className="shadow-2xl bg-white max-w-xs rounded-lg font-mono">
                                <div className="rounded-2xl rounded-lg shadow-2xl m-4 mb-1 max-h-52">
                                            <img className="w-auto rounded-lg" src={`http://localhost:1337${item.image.url}`} alt={`Pic of
                                            ${item.productName}`} />
                                    </div>
                                    <div className="p-8 flex justify-center">
                                    <h2 className="font-bold text-2xl mb-2 text-gray-800">{item.productName}</h2>
                                </div>
                                <div className="flex justify-center">
                                <p className="antialiased leading-tight font-hairline pb-2.5" >{item.paragraph}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="antialiased leading-tight font-hairline text-gray-600 px-8" >{`$${item.price}`}</p>
                                    <InputNumber className='def-number-input number-input px-8'/>
                                </div>
                                    <div className="m-5 border-t-2 border-solid border-gray-200 flex">
                                        <button className="font-mono shadow tracking-wider font-bold mx-2 uppercase bg-blue-500 text-white py-1 px-3 rounded">more info
                                        </button>
                                        <button className="font-mono shadow tracking-wider font-bold mx-2 uppercase bg-blue-500 text-white py-1 px-3 rounded">Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                    )
                })
            }
        </div>
    </>
    )
}

export default HomePageCard
