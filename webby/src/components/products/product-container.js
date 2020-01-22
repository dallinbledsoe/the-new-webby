import React, { Component } from "react";
import axios from "axios";
import ProductItem from "./product-item"

export default class ProductContainer extends Component {
    constructor() {
        super();


        this.getProductItems = this.getProductItems.bind(this);
        this.state = {
            pageTitle: "Products",
            isLoading: false,
            data: [
                {title: "Crewsades Logo Fleece Hoodie", type: "shirt", category: "Hoodies", price: "$30.00", prodimg: "", size: ["s", "m", "l", "xl", "xxl"], quantity: '1', slug: ' ' },
                {title: "Baby Blue Embroidered Tee", type: "shirt", category: "Short-Sleeves", price: "$20.00", prodimg: "", size: ["s", "m", "l", "xl", "xxl"], quantity: '1', slug: ' ' },
                {title: "Black Embroidered Tee", type: "shirt", category: "Short-Sleeves", price: "$20.00", prodimg: "", size: ["s", "m", "l", "xl", "xxl"], quantity: '1', slug: ' ' },
                {title: "No. 3 Black Tee", type: "shirt", category: "Short-Sleeves", price: "$20.00", prodimg: "", size: ["s", "m", "l", "xl", "xxl"], quantity: '1', slug: ' ' },
                {title: "No. 3 Red Tee", type: "shirt", category: "Short-Sleeves", price: "$20.00", prodimg: "", size: ["s", "m", "l", "xl", "xxl"], quantity: '1', slug: ' ' },
                {title: "No. 3 White Tee", type: "shirt", category: "Short-Sleeves", price: "$20.00", prodimg: "", size: ["s", "m", "l", "xl", "xxl"], quantity: '1', slug: ' ' },
                {title: "Enlighten Painting Long Sleeve Shirt", type: "shirt", category: "Long-Sleeves", price: "$29.95", prodimg: "", size: ["s", "m", "l", "xl", "xxl"], quantity: '1', slug: ' ' },
                {title: "Enlighten B&W Painting Long Sleeve Shirt", type: "shirt", category: "Long-Sleeves", price: "$29.95", prodimg: "", size: ["s", "m", "l", "xl", "xxl"], quantity: '1', slug: ' ' },
                {title: "Khaki 5-Panel", type: "hat", category: "5-Panel", price: "$23.50", prodimg: "", size: ["s", "m", "l", "xl", "xxl"], quantity: '1', slug: '' },
                {title: "Olive Green 5-Panel", type: "hat", category: "5-Panel", price: "$23.50", prodimg: "", quantity: '1', slug: '' },
                {title: "Red 5-Panel", type: "hat", category: "5-Panel", price: "$23.50", prodimg: "", quantity: '1', slug: '' },
                {title: "Black 5-Panel", type: "hat", category: "5-Panel", price: "$23.50", prodimg: "", quantity: '1', slug: '' },
                {title: "Navy Blue 5-Panel", type: "hat", category: "5-Panel", price: "$23.50", prodimg: "", quantity: '1', slug: '' },
                {title: "Gray 5-Panel", type: "hat", category: "5-Panel", price: "$23.50", prodimg: "", quantity: '1', slug: '' },
                {title: "Navy-Blue Dad Hat", type: "hat", category: "Dad-Cap", price: "$24.95", prodimg: "", quantity: '1', slug: '' },
                {title: "White Dad Hat", type: "hat", category: "Dad-Cap", price: "$24.95", prodimg: "", quantity: '1', slug: '' },
                {title: "Spruce-Green Dad Hat", type: "hat", category: "Dad-Cap", price: "$24.95", prodimg: "", quantiyt: '1', slug: '' },
                {title: "Pink Dad Hat", type: "hat", category: "Dad-Cap", price: "$24.95", prodimg: "", quantity: '1', slug: '' },
                {title: "Black Dad Hat", type: "hat", category: "Dad-Cap", price: "$24.95", prodimg: "", quantity: '1', slug: '' },
            ]}
        this.handleFilter = this.handleFilter.bind(this);
    }

        





productItems() {
    return this.state.data.map(item => {
        return <ProductItem title={item.title} url={" "} slug={item.slug} />
    })
}

handlePageTitleUpdate() {
    this.setState({
        pageTitle: "Something Else"
    })
}


   
render() {
    if (this.state.isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>{this.state.pageTitle}</h2>
            <button onClick={() => this.handleFilter('Dad-Cap')}>Dad-Caps</button>
            <button onClick={() => this.handleFilter('5-Panel')}>5-Panels</button>
            {this.productItems()}
            </div>
    
    )
}

}








// handleFilter(filter) {
//     this.setState({
//         data: this.state.data.filter(item => {
//             return item.category === filter;
//         })
//     })
// }

// getProductItems() {
//     axios
//     .get("http://localhost:5000/products")
//     .then(response => {
//         console.log("response data", response);
//         this.setState({
//             data: response.data.product_items
//     })
   
//     })
//     .catch(error => {
//         console.log(error);
//     })

// }

// productItems() {
//     return this.state.data.map(item => {
//         return <ProductItem key={item.id} item={item} />
//     })
// }

// componentDidMount() {
//     this.getProductItems();
// }

// handlePageTitleUpdate() {
//     this.setState({
//         pageTitle: "Something Else"
//     })
// }


   
// render() {
//     if (this.state.isLoading) {
//         return <div>Loading...</div>
//     }

//     return (
//         <div>
//             <button onClick={() => this.handleFilter('Hoodies')}>Hoodies</button>
//             <button onClick={() => this.handleFilter('Short-Sleeves')}>Short-Sleeves</button>
//             <button onClick={() => this.handleFilter('Long-Sleeves')}>Long-Sleeves</button>
//             {this.productItems()}
//             </div>
    
//     )
// }

// }
