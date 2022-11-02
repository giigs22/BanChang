<template>
    <div class="flex flex-col items-center justify-center min-h-screen text-gray-300">
            <h1 class="text-7xl">Access denied</h1>
        <h2  class="text-xl">You are not authorized to access this page.</h2>
        <h1  class="text-9xl">403</h1>
        <a class="py-3 px-5 text-lg bg-blue-900 rounded-lg hover:bg-blue-700" @click="$router.push('/')">Home</a>
    </div>
</template>