import React, { useEffect, useState } from "react";
import axios from 'axios'
// import InputNumber from './InputNumber'

const HomePageCard = () => {
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
            <div className='max-width: 1025px; flex justify-center mx-4 px-20 flex-wrap md:justify-between px-10'>
            { 
                product?.map((item) => {
                    return (
                            <div key={item.id} className="flex justify-between mt-5">
                                <div className="shadow-2xl bg-white max-w-xs rounded-lg font-mono">
                                <div className="rounded-2xl rounded-lg m-2 mb-1 md:h-52">
                                    <img className="w-auto rounded-lg shadow-2xl" src={`http://localhost:1337${item.image?.url}`} alt={`Pic of
                                    ${item.productName}`} />
                                </div>
                                    <div className="p-8 flex justify-center">
                                    <h2 className="font-bold text-lg mb-2 text-gray-800 sm:text-2xl">{item.productName}</h2>
                                </div>
                                <div className="flex justify-center">
                                <p className="antialiased leading-tight font-hairline sm:text-lg text-base pb-2.5" >{item.paragraph}</p>
                                </div>
                                <div className="flex sm:justify-between justify-center items-center">
                                    <p className="antialiased leading-tight font-hairline  sm:text-base text-sm text-gray-600 px-8" >{`$${item.price}`}</p>
                                    {/* <InputNumber className='def-number-input number-input px-8'/> */}
                                </div>
                                    <div className="sm:flex-row flex-col m-5 border-t-2 border-solid border-gray-200 flex">
                                        <button className="sm:mb-0 mb-4 font-mono shadow tracking-wider font-bold mx-2 uppercase bg-blue-500 text-white py-1 px-3 rounded">more info
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
