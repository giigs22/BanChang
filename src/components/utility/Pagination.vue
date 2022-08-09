<template>
    <div class="my-5 paginate flex justify-center">
        <button class="btn-prev"
            :disabled="pagination.currentPage==pagination.items[0] || pagination.items.length==0"
            :class="{'disabled:opacity-70': pagination.currentPage==pagination.items[0] || pagination.items.length==0}"
            @click="selectPage(pagination.items[0])"> {{'<<'}} </button>
        <button class="btn-prev" :disabled="pagination.currentPage==1"
            :class="{'disabled:opacity-70': pagination.currentPage==1}" @click="selectPage(pagination.currentPage-1)">
            {{'<'}}
        </button>
        <button class="btn-page"
            :class="[{'border border-yellow-600 shadow-sm shadow-orange-100': item == pagination.currentPage},{'':item !== pagination.currentPage}]"
            v-for="item in pagination.filtered" :key="item" @click="selectPage(item)"> {{item}}
        </button>
        <button class="btn-next" :disabled="pagination.currentPage==pagination.items.length"
            :class="{'disabled:opacity-70': pagination.currentPage==pagination.items.length}"
            @click="selectPage(pagination.currentPage+1)"> {{'>'}}
        </button>
        <button class="btn-next"
            :disabled="pagination.currentPage==pagination.items[pagination.items.length-1] || pagination.items.length==0"
            :class="{'disabled:opacity-70': pagination.currentPage==pagination.items[pagination.items.length-1] || pagination.items.length==0}"
            @click="selectPage(pagination.items[pagination.items.length-1])"> {{'>>'}} </button>
    </div>
</template>
<script>
    export default {
        props:['count','itemperpage'],
        data() {
            return {
                start:0,
                end:10,
                pagination: {
                    range: 5,
                    currentPage: 1,
                    itemPerPage: 10,
                    items: [],
                    filtered: null
                },
            }
        },
        watch:{
            count(n,o){
                this.buildPagination()
                this.selectPage(1)
            },
            'pagination.currentPage': function (n, o) {
                if (n !== o) {
                  this.$emit('changePage',this.start)
                }
            },
        },
        created() {
                this.pagination.itemPerPage = this.itemperpage
                this.buildPagination()
                this.selectPage(1)
        },
        methods: {
             buildPagination() {
                let numberOfPage = Math.ceil(this.count / this.pagination.itemPerPage)
                this.pagination.items = []
                for (var i = 0; i < numberOfPage; i++) {
                    this.pagination.items.push(i + 1)
                }
            },
            selectPage(item) {
                this.pagination.currentPage = item

                let start = 0
                let end = 0
                if (this.pagination.currentPage < this.pagination.range - 2) {
                    start = 1
                    end = start + this.pagination.range - 1
                } else if (this.pagination.currentPage <= this.pagination.items.length && this.pagination.currentPage >
                    this.pagination.items.length - this.pagination.range + 2) {
                    start = this.pagination.items.length - this.pagination.range + 1
                    end = this.pagination.items.length
                } else {
                    start = this.pagination.currentPage - 2
                    end = this.pagination.currentPage + 2
                }
                if (start < 1) {
                    start = 1
                }
                if (end > this.pagination.items.length) {
                    end = this.pagination.items.length
                }

                this.pagination.filtered = []
                for (var i = start; i <= end; i++) {
                    this.pagination.filtered.push(i);
                }

                var sindex = (item - 1) * this.pagination.itemPerPage
                if (item < this.pagination.items.length) {
                    var eindex = sindex + (this.pagination.itemPerPage - 1)
                } else if (item == this.pagination.items.length) {
                    var eindex = sindex + (this.pagination.itemPerPage - 1)
                    if (eindex > this.count) {
                        eindex = this.count
                    } else {
                        eindex = eindex
                    }
                }
                this.start = sindex
                this.end = eindex

            },
        },
      
    }
</script>