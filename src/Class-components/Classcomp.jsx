import  React  from "react";
import axios from "axios";

export class Classcomp extends React.Component
{
    constructor(){
        super();
        this.state = {
           categories: [],
           products: []
        }
    }

    LoadCategories(){
        axios({
            method: "get",
            url: "http://fakestoreapi.com/products/categories"
        }).then((response)=>{
            this.setState({
                categories: response.data
            })
        })
    }

    LoadProducts(){
        axios({
            method:"get",
            url: "http://fakestoreapi.com/products"
        })
        .then(response=>{
            this.setState({
                products: response.data
            })
        })
    }

    componentDidMount(){
        this.LoadCategories();
        this.LoadProducts();
    }

    render(){
        return(
            <div className="container-fluid">
               <section className="mt-4 row">
                    <nav className="col-3">
                        <label className="form-label fw-bold">Select Category</label>
                        <div>
                            <select className="form-select">
                              {
                                this.state.categories.map(category=>
                                    <option key={category}>{category}</option>
                                    )
                              }
                            </select>
                        </div>
                    </nav>
                    <main className="col-9 flex-wrap overflow-auto d-flex" style={{height:'600px'}}>
                       {
                         this.state.products.map(product=>
                            <div className="card m-2 p-2" style={{width:'200px'}}>
                            <img src={product.image} className="card-img-top" height="150" />
                            <div className="card-header">
                                <p>{product.title}</p>
                            </div>
                            </div>
                           
                            )
                       }
                    </main>
               </section>
            </div>
        )
    }
}