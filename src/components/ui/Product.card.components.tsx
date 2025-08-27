"use client"

import { TProduct } from '@/public/types/Product.type';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function ProductCard() {
    const [data, setData] = useState<TProduct[]>([]);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('https://fakestoreapi.com/products');
            const json = await res.json();
            setData(json);
        }
        fetchData();
    }, []);
  return (
    <div className='flex flex-wrap max-w-7xl justify-center gap-[5px]'>
        {data.map(product => (
            <Link className='hover:border-white/70 hover:border-[1px] border-white/30 border-[1px] rounded-[10px]' href={`/products/${product.id}`} key={product.id}>
                <div className='max-w-[400px]' key={product.id} style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
                    <img src={product.image} alt={product.title} style={{width: '100px', height: '100px'}}/>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <strong><p>${product.price}</p></strong>
                </div>
            </Link>
        ))}
    </div>
  )
}
