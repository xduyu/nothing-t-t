"use client"

import { TProduct } from '@/public/types/Product.type';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function ProductInfo() {
    const params = useParams();
    const id = params.id;
    const [data, setData] = useState<TProduct>( {} as TProduct );
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            const json = await res.json();
            setData(json);
        }
        fetchData();
    }, []);
    const productImage = data.image;
    return (
        <div>
            {productImage && (
                <Image src={productImage} alt='Product Image' width={500} height={500} />
            )}
            <h1>Product Info Page {id}</h1>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>${data.price}</p>
            <p>Category: {data.category}</p>
            <Link href="/">Back to products</Link>
        </div>
    )
}

