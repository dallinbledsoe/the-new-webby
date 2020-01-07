import React, { Component } from "react";

import ShirtItem from "./shirt-item"

export default class ShirtContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Shirts",
            isLoading: false,
            data: [
                {title: "Crewsades Logo Fleece Hoodie, category: "Hoodies", slug: ' ' }, 
                {title: "Baby Blue Embroidered Tee", category: "Short-Sleeves", slug: ' ' },
                {title: "Black Embroidered Tee", category: "Short-Sleeves", slug: ' ' },
                {title: "No. 3 Black Tee", category: "Short-Sleeves", slug: ' ' },
                {title: "No. 3 Red Tee", category: "Short-Sleeves", slug: ' ' },
                {title: "No. 3 White Tee", category: "Short-Sleeves", slug: ' ' },
                {title: "Enlighten Painting Long Sleeve Shirt", category: "Long-Sleeves", slug: ' ' }
                {title: "Enlighten B&W Painting Long Sleeve Shirt", category: "Long-Sleeves", slug: ' ' }
        }
        this.handleFilter = this.handleFilter.bind(this);
    }

        
    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }
 

    portfolioItems() {
        return this.state.data.map(item => {
            return <ShirtItem title={item.title} url={"google.com"} slug={item.slug} />
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
                <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>
                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                {this.portfolioItems()}
                </div>
        
        )
    }

}