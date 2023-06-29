import  React  from "react";

export class Classexample extends React.Component
{
    constructor(){
        super();
        this.state = {
            title : "Product Details",
            id: 101,
            name: "Samsung TV",
            price: 45000.33,
            cities: ["Delhi", "Hyd"],
            rating: {rate:3.2, count:5000}
        }
    }
    render(){
        return(
            <div className="container-fluid col-10">
               <h2>{this.state.title}</h2>
               <dl>
                <dt>Name</dt>
                <dd>{this.state.name}</dd>
                <dt>Price</dt>
                <dd>{this.state.price}</dd>
                <dt>Shipped To</dt>
                <dd>
                    <ol>
                        {
                            this.state.cities.map(city=>
                                <li key={city}>{city}</li>
                                )
                        }
                    </ol>
                </dd>
                <dt>Rating</dt>
                <dd>{this.state.rating.rate} <span className="bi bi-star-fill text-success"></span> [{this.state.rating.count}] </dd>
               </dl>
            </div>
        )
    }
}