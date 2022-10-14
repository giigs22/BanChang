<template>
    <ul class="text-white flex text-lg text-center border-b border-gray-600">
        <li class="w-1/2 py-1 px-3 hover:bg-gray-500">Event</li>
        <li class="w-1/2 py-1 px-3 hover:bg-gray-500">Parking</li>
    </ul>
    <div id="tab1">
        <ul class="text-white p-2 list-event">
            <li>Camera Malfunction <span class="text-red-600">0</span></li>
            <li>Trespasser <span class="text-red-600">0</span></li>
            <li>Suspected Face Detection <span class="text-red-600">0</span></li>
            <li>Group Cluster Detection <span class="text-red-600">0</span></li>
            <li>Traffic Violation <span class="text-red-600">0</span></li>
            <li>Parking Violation <span class="text-red-600">0</span></li>
        </ul>
    </div>
    <div id="tab2">
        <ul class="text-white p-2 list-event">
            <li>Status <span class="text-green-600">Normal</span></li>
            <li>Occupied Parking <span class="text-blue-600">0</span></li>
            <li>Vacant Parking <span class="text-purple-600">0</span></li>

        </ul>
    </div>
</template>