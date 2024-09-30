import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    { id: 1, name: 'nome1', price: 61, qty: 10 },
    { id: 2, name: 'nome2', price: 62, qty: 20 },
    { id: 3, name: 'nome3', price: 63, qty: 30 },
    { id: 4, name: 'nome4', price: 64, qty: 40 },
    { id: 5, name: 'nome5', price: 65, qty: 50 }
  ])

  function getProductById(id) {
    for (let product of products.value) {
      if (product.id == id) {
        return product
      }
    }
    return null
    // return products.value.find((product) => product.id == id)
  }

  function deleteProductById(id){
    const pos = products.value.findIndex((product) => product.id == id)
    products.value.splice(pos, 1)
  }

  return { products, getProductById, deleteProductById }
})
