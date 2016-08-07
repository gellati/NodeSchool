import React from 'react'

// not working
// working solution in file test3.js
// taken from https://facebook.github.io/react/docs/thinking-in-react.html

export const FilterableProductTable = React.createClass({

    render() {
        return (
	    <div>
		<SearchBar/>
		<ProductTable products={this.props.products}/>
		<ProductCategoryRow>
		<ProductRow/>
		</ProductCategoryRow>

		</div>
        )
    }
})

//		<ProductTable>{this.props.products}</ProductTable>

export const SearchBar = React.createClass({
    render() {
	return (
		<div></div>
	)
    }
})

export const ProductTable = React.createClass({

//function ProductTable(props) = React.createClass({
    //  var products = FilterableProductTable
//    this.props.products = 
    render(){
	return(

			<div>
		<ProductCategoryRow/>
		<ProductRow/>


			    </div>
	    
/*
		<div>
		{props.items.map(function(item, i){
		    return(
			<div>
		    <ProductCategoryRow/>
			    <ProductRow/>
			    </div>
		    );
		})}
		</div>

*/
	    
//		<div>
//		{this.props.products.map(function(product, i){
//		    return (<ProductRow/>)
//		}
//	        </div>


	)
    }

})

export const ProductRow = React.createClass({
    render(){
	return <div></div>
    }
})

export const ProductCategoryRow = React.createClass({
    render(){
	return <div></div>
    }
})
