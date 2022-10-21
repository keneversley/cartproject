import React, { Component } from 'react';

class Shopcard extends Component {
    state = {
    loading: true,
    product: null,
    }

    async componentDidMount() {
        const url = "https://fakestoreapi.com/products?limit=5"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ product: data[0], loading: false });
       

    }

    render() {
       return (
        <div>
        {this.state.loading || !this.state.product ? (
            <div>loading...</div>

        ): (
            <div>
                <div>{this.state.product.id}</div>
                <div>{this.state.product.title}</div>
                <img src={this.state.product.image} />
            </div>

        )}
        </div>
       );
    }
}

export default Shopcard;