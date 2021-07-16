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
        };
    }

    cartChange() {
        console.log("Chal riya hai")
        let items = 0;
        if (this.state.fries) items = items + 1;
        if (this.state.Hamburger) items = items + 1;
        if (this.state.Pepsi) items = items + 1;
        if (this.state.Coke) items = items + 1;

        this.setState({ cartCount: items })
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

        this.cartChange()

    }


    render() {

        return (
            <MenuComponent Priceplus={this.Priceplus} state={this.state} />
        )
    }
}
export default Menu;