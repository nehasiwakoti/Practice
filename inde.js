class App extends React.component{
    // handleClick = (e) =>{
    //     this setState({ name: 'Neha"});
    // };
    Friends=[
        {Name:'Ram karki' , address:'jhapa',contact:'9867554567'},
        {Name:'Sita thapa' , address:'morang',contact:'987676544'},
        {Name:'Gita magar', address:'dharan',contact:'987654321'},
        {Name:'Hari Khadka', address:'sunsari',contact:'9876543210'}
    
      
    ];
    // state={
    //     name:'Neha Shiwakoti'
    // };

    
	render() {
		return (
			<div>
				<h1> Hello react</h1>
				<button onClick={this.handleClick}>click me</button>
				<p>message from prop is:{this.props.message}</p>

				<p> {this.state.name}</p>
				<h3> list of Friends</h3>
				{this.Friends.map((Friends) => <Item title={Friends.title} address={Name.adddress} genre={Friends.genre} />)}
			</div>
		);
		
	}
// class Item extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<p> tittle:{this.props.title}</p>
// 				<p> year:{this.props.year}</p>
// 				<p> genre:{this.props.genre}</p>
// 			</div>
// 		);
// 	}
//}

 Item = (props) => (
	<div>
		<p> Friends:{props.Friends}</p>
		<p> address:{props.address}</p>
		<p> contact:{props.contact}</p>
	</div>
)


}
ReactDOM.render(<App message="this is from prop" />, document.getElementById('app'));
