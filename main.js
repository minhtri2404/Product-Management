const { createApp } = Vue;

createApp({
    data() {
        return {
            product: {
                name: '',
                price: 0
            },
            products: [],
            searchQuery: '',
            editIndex: null
        };
    },
    computed: {
        filteredProducts() {
            if (this.searchQuery === '') {
                return this.products;
            }
            // Lọc sản phẩm theo tên, không phân biệt hoa thường
            return this.products.filter(product =>
                product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    },
    methods:{
        ThemSp(){
            if (this.product.name !== "" && this.product.price !== "") {
                this.products = [...this.products,this.product];
            }
            //cho lại đối tượng rỗng
            this.product = {
                name: '',
                price: 0
            }
        },
        Xoa(index){
            this.products.splice(index,1);
        },
        Edit(index){
            this.product = {...this.products[index]};
            this.editIndex = index;
        },
        Update(){
            if (this.editIndex !== null) {
                // Cập nhật sản phẩm tại vị trí `editIndex`
                this.products[this.editIndex] = { ...this.product};
                this.editIndex = null;  // Reset lại `editIndex` sau khi cập nhật
            }
             //cho lại đối tượng rỗng
            this.product = {
                name: '',
                price: 0
            };
        }
    }
   
}).mount('#app');
