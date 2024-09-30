<script setup>
import { useProductStore } from '@/stores/product';
import { useRouter } from 'vue-router';

const ProductStore = useProductStore()
const router = useRouter()

function visualizar(id){
  router.push(`/produto/${id}`)
}
</script>

<template>
  <div class="master">
    <h1>listagem de Produtos:</h1>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome:</th>
          <th>Preço:</th>
          <th>Ações:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in ProductStore.products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button @click="visualizar(product.id)">Ver</button>
            <button @click="productStore.deleteProductById(product.id)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
</style>
