import React from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react'
import { useCart } from '../hooks/useCart'
import { useAuth } from '../hooks/useAuth'

const Cart = () => {
  const { cartItems, loading, updateQuantity, removeFromCart, getCartTotal } = useCart()
  const { user } = useAuth()

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Sign in to view your cart</h2>
          <p className="text-gray-600 mb-6">You need to be signed in to access your shopping cart.</p>
          <Link
            to="/login"
            className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some products to get started.</p>
          <Link
            to="/products"
            className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Link
            to="/products"
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-slate-800 mb-6">
              Shopping Cart ({cartItems.length} items)
            </h1>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-sm p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.product?.image_url || ''}
                      alt={item.product?.name || ''}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-slate-800 mb-1">
                        {item.product?.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {item.product?.category}
                      </p>
                      <p className="text-lg font-bold text-slate-800">
                        ${item.product?.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>

                      <span className="font-semibold text-lg min-w-[2rem] text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors ml-4"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Subtotal: ${((item.product?.price || 0) * item.quantity).toFixed(2)}
                    </span>

                    {(item.product?.stock_quantity || 0) < 5 && (
                      <span className="text-sm text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                        Only {item.product?.stock_quantity} left in stock
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-bold text-slate-800 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-emerald-600">Free</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">${(getCartTotal() * 0.1).toFixed(2)}</span>
                </div>

                <hr className="border-gray-200" />

                <div className="flex justify-between text-lg">
                  <span className="font-bold text-slate-800">Total</span>
                  <span className="font-bold text-slate-800">
                    ${(getCartTotal() * 1.1).toFixed(2)}
                  </span>
                </div>
              </div>

              <button className="w-full bg-slate-800 text-white py-4 rounded-lg font-semibold hover:bg-slate-700 transition-colors mb-4">
                Proceed to Checkout
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Secure checkout with</p>
                <div className="flex justify-center space-x-2">
                  <div className="bg-gray-100 px-3 py-1 rounded text-xs font-semibold">VISA</div>
                  <div className="bg-gray-100 px-3 py-1 rounded text-xs font-semibold">MASTERCARD</div>
                  <div className="bg-gray-100 px-3 py-1 rounded text-xs font-semibold">PAYPAL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart