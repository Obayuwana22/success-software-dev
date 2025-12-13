import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { CartItem } from '../types'
import { useAuth } from './useAuth'

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      fetchCartItems()
    } else {
      setCartItems([])
      setLoading(false)
    }
  }, [user])

  const fetchCartItems = async () => {
    if (!user) return

    try {
      const { data, error } = await supabase
        .from('cart_items')
        .select(`
          *,
          product:products(*)
        `)
        .eq('user_id', user.id)

      if (error) throw error
      setCartItems(data || [])
    } catch (err) {
      console.error('Error fetching cart:', err)
    } finally {
      setLoading(false)
    }
  }

  const addToCart = async (productId: string, quantity: number = 1) => {
    if (!user) return

    try {
      // Check if item already exists in cart
      const existingItem = cartItems.find(item => item.product_id === productId)

      if (existingItem) {
        // Update quantity
        const { error } = await supabase
          .from('cart_items')
          .update({ quantity: existingItem.quantity + quantity })
          .eq('id', existingItem.id)

        if (error) throw error
      } else {
        // Add new item
        const { error } = await supabase
          .from('cart_items')
          .insert([{
            user_id: user.id,
            product_id: productId,
            quantity
          }])

        if (error) throw error
      }

      await fetchCartItems()
    } catch (err) {
      console.error('Error adding to cart:', err)
    }
  }

  const updateQuantity = async (itemId: string, quantity: number) => {
    try {
      const { error } = await supabase
        .from('cart_items')
        .update({ quantity })
        .eq('id', itemId)

      if (error) throw error
      await fetchCartItems()
    } catch (err) {
      console.error('Error updating cart:', err)
    }
  }

  const removeFromCart = async (itemId: string) => {
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', itemId)

      if (error) throw error
      await fetchCartItems()
    } catch (err) {
      console.error('Error removing from cart:', err)
    }
  }

  const clearCart = async () => {
    if (!user) return

    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', user.id)

      if (error) throw error
      setCartItems([])
    } catch (err) {
      console.error('Error clearing cart:', err)
    }
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.product?.price || 0) * item.quantity
    }, 0)
  }

  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }

  return {
    cartItems,
    loading,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartItemCount,
    refetch: fetchCartItems
  }
}