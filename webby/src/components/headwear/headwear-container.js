import React, { Component } from "react";

import PortfolioItem from "./headwear-item"

export default class HeadwearContainer extends Component {
    constructor() {
        super();

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [
                {title: "Quip", category: "eCommerce", slug: 'quip' }, 
                {title: "Eventbrite", category: "Scheduling", slug: 'eventbrite' },
                {title: "Ministry Safe", category: "Enterprise", slug: 'minstry-safe' }, 
                {title: "SwingAway", category: "eCommerce", slug: 'swingaway' }]
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
            return <PortfolioItem title={item.title} url={"google.com"} slug={item.slug} />
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