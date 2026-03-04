'use client';

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [quantities, setQuantities] = useState([2, 3, 1, 1]);

  const cartItems = [
    { id: 1, name: "Denim T-Shirt", ref: "Ref: 4577832", color: "Blue", price: 7500, image: "/camiseta.png" },
    { id: 2, name: "Denim Pants", ref: "Ref: 4577832", color: "Blue", price: 9000, image: "/pantalon.png" },
    { id: 3, name: "Sony Smartwat...", ref: "Ref: 4582091", color: "Black", price: 24500, image: "/reloj.png" },
    { id: 4, name: "Cognac Oxford", ref: "Ref: 4577832", color: "Brown", price: 4500, image: "/zapatos.png" },
  ];

  const subtotal = cartItems.reduce((sum, item, index) => sum + (item.price * quantities[index]), 0);

  const updateQuantity = (index: number, delta: number) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, newQuantities[index] + delta);
    setQuantities(newQuantities);
  };

  return (
    <div className="flex justify-center items-center bg-gray-200" style={{ minHeight: '100vh', padding: '40px' }}>
      <div className="flex gap-0 bg-white" style={{ width: '1500px', height: '900px', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
        
        {/* Left Panel - Shopping Cart */}
        <div className="flex flex-col bg-white" style={{ flex: '1', borderRadius: '24px 0 0 24px', padding: '48px 80px 48px 48px' }}>
          
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center bg-white" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #d1d5db' }}>
              <Image 
                src="/icono.png" 
                alt="Shopping Cart"
                width={24}
                height={24}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h1 className="text-gray-800" style={{ fontSize: '28px', fontWeight: '400' }}>Your Shopping Cart</h1>
          </div>

          {/* Cart Items */}
          <div className="flex flex-col gap-4" style={{ flex: '1', overflowY: 'auto' }}>
            {cartItems.map((item, index) => (
              <div key={item.id} className="flex items-center gap-4 p-4" style={{ borderRadius: '16px', position: 'relative', backgroundColor: '#efefef', paddingLeft: '16px', paddingRight: '16px' }}>
                <div className="flex items-center justify-center" style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    width={70}
                    height={70}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                
                <div style={{ flex: '1', minWidth: '160px' }}>
                  <h3 className="text-gray-800" style={{ fontWeight: '500', fontSize: '16px', marginBottom: '4px' }}>{item.name}</h3>
                  <p className="text-gray-400" style={{ fontSize: '12px' }}>{item.ref}</p>
                </div>

                <div className="text-gray-600" style={{ fontSize: '15px', minWidth: '70px', textAlign: 'center' }}>{item.color}</div>

                <div className="flex items-center gap-2" style={{ minWidth: '70px', justifyContent: 'center' }}>
                  <span style={{ fontSize: '18px', fontWeight: '500' }}>{quantities[index]}</span>
                  <div className="flex flex-col gap-1">
                    <button 
                      onClick={() => updateQuantity(index, 1)}
                      className="flex items-center justify-center bg-gray-400 text-white"
                      style={{ width: '20px', height: '20px', borderRadius: '50%', fontSize: '13px', lineHeight: '1' }}
                    >
                      +
                    </button>
                    <button 
                      onClick={() => updateQuantity(index, -1)}
                      className="flex items-center justify-center bg-gray-400 text-white"
                      style={{ width: '20px', height: '20px', borderRadius: '50%', fontSize: '13px', lineHeight: '1' }}
                    >
                      −
                    </button>
                  </div>
                </div>

                <div className="text-gray-800" style={{ minWidth: '130px', textAlign: 'right', fontWeight: '500', fontSize: '16px' }}>
                  {(item.price * quantities[index]).toFixed(2)} NGN
                </div>

                <button className="text-gray-400" style={{ fontSize: '24px', lineHeight: '1', marginLeft: '8px' }}>×</button>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-gray-200 mt-6 pt-6" style={{ borderTop: '1px solid #e5e7eb' }}>
            <button className="flex items-center gap-2 text-gray-600">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              <span style={{ fontSize: '16px' }}>Back to Shop</span>
            </button>
            <div style={{ textAlign: 'right' }}>
              <div className="text-gray-500" style={{ fontSize: '14px' }}>Subtotal:</div>
              <div className="text-gray-800" style={{ fontSize: '24px', fontWeight: '500' }}>{subtotal.toFixed(2)} NGN</div>
            </div>
          </div>
        </div>

        {/* Right Panel - Card Details */}
        <div className="flex flex-col bg-gray-700" style={{ width: '480px', borderRadius: '0 24px 24px 0', backgroundColor: '#4a4a4a', position: 'relative' }}>
          
          {/* Decorative tab with circles - OUTSIDE the card */}
          <div style={{ position: 'absolute', top: '60px', left: '-45px', width: '50px', height: '180px', backgroundColor: '#3a3a3a', borderRadius: '20px 0 20px 0', zIndex: 10 }}>
            <div className="flex flex-col gap-3" style={{ position: 'absolute', top: '75px', left: '21px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#6a6a6a' }}></div>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#d4af37' }}></div>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#6a6a6a' }}></div>
            </div>
          </div>

          <div className="flex flex-col" style={{ flex: '1', padding: '32px' }}>
            <h2 className="text-yellow-600 mb-12" style={{ fontSize: '32px', fontWeight: '400', color: '#d4af37', marginTop: '40px' }}>Card Details</h2>

            {/* Card Type Selection */}
            <div className="mb-10">
              <label className="text-gray-400" style={{ display: 'block', fontSize: '16px', marginBottom: '20px' }}>Select Card Type</label>
              <div className="flex gap-8 items-center">
                <button className="flex items-center justify-center" style={{ padding: '8px', backgroundColor: 'transparent', border: 'none', filter: 'brightness(0) invert(1)' }}>
                  <Image 
                    src="/icons/mastercard.svg" 
                    alt="Mastercard"
                    width={45}
                    height={28}
                    style={{ objectFit: 'contain' }}
                  />
                </button>
                <button className="flex items-center justify-center" style={{ padding: '8px', backgroundColor: 'transparent', border: 'none', filter: 'grayscale(1) opacity(0.5)' }}>
                  <Image 
                    src="/icons/visa.svg" 
                    alt="VISA"
                    width={55}
                    height={28}
                    style={{ objectFit: 'contain' }}
                  />
                </button>
                <button className="flex items-center justify-center" style={{ padding: '8px', backgroundColor: 'transparent', border: 'none', filter: 'grayscale(1) opacity(0.5)' }}>
                  <Image 
                    src="/icons/verve.svg" 
                    alt="Verve"
                    width={55}
                    height={28}
                    style={{ objectFit: 'contain' }}
                  />
                </button>
              </div>
            </div>

            {/* Card Number */}
            <div className="mb-10">
              <label className="text-gray-400" style={{ display: 'block', fontSize: '16px', marginBottom: '16px' }}>Card Number</label>
              <input 
                type="text" 
                className="text-white"
                style={{ width: '100%', backgroundColor: 'transparent', borderBottom: '1px solid #6b6b6b', padding: '12px 0', outline: 'none', fontSize: '16px' }}
              />
            </div>

            {/* Expiry Date and CVV */}
            <div className="flex gap-8" style={{ marginBottom: 'auto' }}>
              <div style={{ flex: '1' }}>
                <label className="text-gray-400" style={{ display: 'block', fontSize: '16px', marginBottom: '16px' }}>Expiry Date</label>
                <input 
                  type="text" 
                  className="text-gray-500"
                  placeholder="___/___/___"
                  style={{ width: '100%', backgroundColor: 'transparent', borderBottom: '1px solid #6b6b6b', padding: '12px 0', outline: 'none', fontSize: '16px' }}
                />
              </div>
              <div style={{ width: '140px' }}>
                <label className="text-gray-400" style={{ display: 'block', fontSize: '16px', marginBottom: '16px' }}>CVV</label>
                <input 
                  type="text" 
                  className="text-gray-500"
                  placeholder="___"
                  maxLength={3}
                  style={{ width: '100%', backgroundColor: 'transparent', borderBottom: '1px solid #6b6b6b', padding: '12px 0', outline: 'none', fontSize: '16px' }}
                />
              </div>
            </div>
          </div>

          {/* Checkout Button - Full Width at Bottom */}
          <button className="text-gray-800" style={{ width: '100%', backgroundColor: '#f4c430', padding: '28px', fontSize: '26px', fontWeight: '500', color: '#2a2a2a', borderRadius: '0 0 24px 0' }}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
