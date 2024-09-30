<script setup>
    import { onMounted, ref } from 'vue';
    import { useProductStore } from '@/stores/product';

    const productStore = useProductStore()
    const product = ref({})
    const props = defineProps(['id'])

    onMounted(() =>{
        product.value = productStore.getProductById(props.id)
    })

</script>

<template>
    <h1>detalhes do produto - {{ id }}</h1>
    <h2>{{ product.name }}</h2>
    <h2>{{ product.price }}</h2>
    <h2>{{ product.qty }}</h2>
</template>