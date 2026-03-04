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
    <div className="flex justify-center items-center bg-gray-200" style={{ minHeight: '100vh' }}>
      <div className="flex gap-0 bg-white" style={{ width: '1600px', height: '900px', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
        
        {/* Left Panel - Shopping Cart */}
        <div className="flex flex-col bg-white p-8" style={{ flex: '1', borderRadius: '24px 0 0 24px' }}>
          
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center bg-white" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #d1d5db' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </div>
            <h1 className="text-gray-800" style={{ fontSize: '28px', fontWeight: '400' }}>Your Shopping Cart</h1>
          </div>

          {/* Cart Items */}
          <div className="flex flex-col gap-4" style={{ flex: '1', overflowY: 'auto' }}>
            {cartItems.map((item, index) => (
              <div key={item.id} className="flex items-center gap-6 bg-gray-50 p-5" style={{ borderRadius: '16px', position: 'relative' }}>
                <div className="flex items-center justify-center" style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    width={90}
                    height={90}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                
                <div style={{ flex: '1', minWidth: '180px' }}>
                  <h3 className="text-gray-800" style={{ fontWeight: '500', fontSize: '18px', marginBottom: '4px' }}>{item.name}</h3>
                  <p className="text-gray-400" style={{ fontSize: '13px' }}>{item.ref}</p>
                </div>

                <div className="text-gray-600" style={{ fontSize: '16px', minWidth: '80px', textAlign: 'center' }}>{item.color}</div>

                <div className="flex items-center gap-2" style={{ minWidth: '80px', justifyContent: 'center' }}>
                  <span style={{ fontSize: '20px', fontWeight: '500' }}>{quantities[index]}</span>
                  <div className="flex flex-col gap-1">
                    <button 
                      onClick={() => updateQuantity(index, 1)}
                      className="flex items-center justify-center bg-gray-400 text-white"
                      style={{ width: '22px', height: '22px', borderRadius: '50%', fontSize: '14px', lineHeight: '1' }}
                    >
                      +
                    </button>
                    <button 
                      onClick={() => updateQuantity(index, -1)}
                      className="flex items-center justify-center bg-gray-400 text-white"
                      style={{ width: '22px', height: '22px', borderRadius: '50%', fontSize: '14px', lineHeight: '1' }}
                    >
                      −
                    </button>
                  </div>
                </div>

                <div className="text-gray-800" style={{ minWidth: '140px', textAlign: 'right', fontWeight: '500', fontSize: '18px' }}>
                  {(item.price * quantities[index]).toFixed(2)} NGN
                </div>

                <button className="text-gray-400" style={{ fontSize: '28px', lineHeight: '1', marginLeft: '8px' }}>×</button>
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
        <div className="flex flex-col bg-gray-700 p-8" style={{ width: '580px', borderRadius: '0 24px 24px 0', backgroundColor: '#4a4a4a', position: 'relative' }}>
          
          {/* Decorative circles */}
          <div className="flex flex-col gap-3" style={{ position: 'absolute', top: '32px', right: '32px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#5a5a5a' }}></div>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#5a5a5a' }}></div>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#5a5a5a' }}></div>
          </div>

          <h2 className="text-yellow-600 mb-12" style={{ fontSize: '28px', fontWeight: '400', color: '#d4af37' }}>Card Details</h2>

          {/* Card Type Selection */}
          <div className="mb-8">
            <label className="text-gray-300" style={{ display: 'block', fontSize: '15px', marginBottom: '16px' }}>Select Card Type</label>
            <div className="flex gap-4">
              <button className="text-white" style={{ padding: '14px 28px', borderRadius: '8px', backgroundColor: '#5a5a5a', fontWeight: '500' }}>
                <span style={{ fontSize: '18px' }}>⚪⚪</span>
              </button>
              <button className="text-gray-400" style={{ padding: '14px 28px', borderRadius: '8px', backgroundColor: 'transparent', border: '1px solid #5a5a5a', fontSize: '15px' }}>
                VISA
              </button>
              <button className="text-gray-400" style={{ padding: '14px 28px', borderRadius: '8px', backgroundColor: 'transparent', border: '1px solid #5a5a5a', fontSize: '15px' }}>
                Verve
              </button>
            </div>
          </div>

          {/* Card Number */}
          <div className="mb-6">
            <label className="text-gray-300" style={{ display: 'block', fontSize: '15px', marginBottom: '12px' }}>Card Number</label>
            <input 
              type="text" 
              className="text-white"
              style={{ width: '100%', backgroundColor: 'transparent', borderBottom: '1px solid #6b7280', padding: '12px 0', outline: 'none', fontSize: '16px' }}
            />
          </div>

          {/* Expiry Date and CVV */}
          <div className="flex gap-6" style={{ marginBottom: 'auto' }}>
            <div style={{ flex: '1' }}>
              <label className="text-gray-300" style={{ display: 'block', fontSize: '15px', marginBottom: '12px' }}>Expiry Date</label>
              <input 
                type="text" 
                className="text-white"
                placeholder="__ / __ / __"
                style={{ width: '100%', backgroundColor: 'transparent', borderBottom: '1px solid #6b7280', padding: '12px 0', outline: 'none', fontSize: '16px' }}
              />
            </div>
            <div style={{ width: '120px' }}>
              <label className="text-gray-300" style={{ display: 'block', fontSize: '15px', marginBottom: '12px' }}>CVV</label>
              <input 
                type="text" 
                className="text-white"
                placeholder="___"
                maxLength={3}
                style={{ width: '100%', backgroundColor: 'transparent', borderBottom: '1px solid #6b7280', padding: '12px 0', outline: 'none', fontSize: '16px' }}
              />
            </div>
          </div>

          {/* Checkout Button */}
          <button className="text-gray-800 mt-8" style={{ width: '100%', backgroundColor: '#f4c430', padding: '18px', borderRadius: '8px', fontSize: '20px', fontWeight: '500' }}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
