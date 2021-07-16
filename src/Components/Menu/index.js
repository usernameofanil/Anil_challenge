import React, { Component } from "react"
import MenuComponent from "./MenuComponent"

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartCount: 0,
            fries: 0,
            Hamburger: 0,
            Pepsi: 0,
            Coke: 0,
            friesPrice: 0,
            HamburgerPrice:0,
            PepsiPrice:0,
            CokePrice:0,
            finalAmount:0,
        };
    }

     cartChange = () =>{
        let items = 0;
        if (this.state.fries) items = items + 1;
        if (this.state.Hamburger) items = items + 1;
        if (this.state.Pepsi) items = items + 1;
        if (this.state.Coke) items = items + 1;

        this.setState({ cartCount: items })
        console.log("Fries",this.state.fries,"Cart",this.state.cartCount)
    }

    Priceplus = (e) => {
        console.log(e)
        if (e === "Fries") {
            this.setState({ fries: this.state.fries + 1 });
            this.setState({ friesPrice: this.state.friesPrice + 100 })
        }
        if (e === "Pepsi") {
            this.setState({ Pepsi: this.state.Pepsi + 1 });
            this.setState({ PepsiPrice: this.state.PepsiPrice + 50 })
        }
        if (e === "Coke") {
            this.setState({ Coke: this.state.Coke + 1 });
            this.setState({ CokePrice: this.state.CokePrice + 50 }) 
        }
        if (e === "Hamburger") {
            this.setState({ Hamburger: this.state.Hamburger + 1 });
            this.setState({ HamburgerPrice: this.state.HamburgerPrice + 200 })
        }
        this.setState({finalAmount:this.state.HamburgerPrice+this.state.PepsiPrice+this.state.friesPrice+this.state.CokePrice})

    }
    Priceminus = (e) => {
        console.log(e)
        if (e === "Fries" && this.state.fries > 0 ) {
            this.setState({ fries: this.state.fries - 1 });
            this.setState({ friesPrice: this.state.friesPrice - 100 })
        }
        if (e === "Pepsi" && this.state.Pepsi > 0) {
            this.setState({ Pepsi: this.state.Pepsi - 1 });
            this.setState({ PepsiPrice: this.state.PepsiPrice - 50 })
        }
        if (e === "Coke"  && this.state.Coke > 0) {
            this.setState({ Coke: this.state.Coke - 1 });
            this.setState({ CokePrice: this.state.CokePrice - 50 }) 
        }
        if (e === "Hamburger"  && this.state.Hamburger > 0) {
            this.setState({ Hamburger: this.state.Hamburger - 1 });
            this.setState({ HamburgerPrice: this.state.HamburgerPrice - 200 })
        }
        this.setState({finalAmount:this.state.HamburgerPrice+this.state.PepsiPrice+this.state.friesPrice+this.state.CokePrice})

    }


    render() {

        return (
            <MenuComponent refreshCart={this.cartChange} Priceplus={this.Priceplus} Priceminus={this.Priceminus} state={this.state} />
        )
    }
}
export default Menu;