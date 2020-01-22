import React, { Component } from "react";
import HeadwearItem from "./headwear-item";

export default class HeadwearContainer extends Component {
    constructor() {
        super();
    
        this.state = {
            pageTitle: "Headwear",
            isLoading: false,
            data: [
                {title: "Khaki 5-Panel", category: "5-Panel", slug: '' },
                {title: "Olive Green 5-Panel", category: "5-Panel", slug: '' },
                {title: "Red 5-Panel", category: "5-Panel", slug: '' },
                {title: "Black 5-Panel", category: "5-Panel", slug: '' },
                {title: "Navy Blue 5-Panel", category: "5-Panel", slug: '' },
                {title: "Gray 5-Panel", category: "5-Panel", slug: '' },
                {title: "Navy-Blue Dad Hat", category: "Dad-Cap", slug: '' },
                {title: "White Dad Hat", category: "Dad-Cap", slug: '' },
                {title: "Spruce-Green Dad Hat", category: "Dad-Cap", slug: '' },
                {title: "Pink Dad Hat", category: "Dad-Cap", slug: '' },
                {title: "Black Dad Hat", category: "Dad-Cap", slug: '' },

            ]
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
 

    headwearItems() {
        return this.state.data.map(item => {
            return <HeadwearItem title={item.title} url={" "} slug={item.slug} />
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
                {this.headwearItems()}
                </div>
        
        )
    }

}