import React, { Component } from 'react';
import axios from 'axios';

class SingleUser extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            currentUserId: this.props.match.params.id,
            user: [],
            showAddress: false,
            showCompany: false
        };
        
    }
    componentDidMount(){
        let currentUserId = this.props.match.params.id;
        axios.get('https://jsonplaceholder.typicode.com/users/' + currentUserId)
            .then(response => {this.setState({user:response.data});})
            .catch(function (error){
               alert('Error retrieving information, error= ' + error) 
            });
    }
    
    expandAddress(){
        if (!this.state.showAddress)
        this.setState({showAddress: true});
        else 
        this.setState({showAddress: false});

    }
    
    expandCompany(hello){
         if (!this.state.showCompany)
            this.setState({showCompany: true});
        else 
            this.setState({showCompany: false});
    }
    
    render(){
        if (! this.state.user || this.state.user.length === 0){
            return null;
        }else{
        return (
            <div className="section ">
                <article className="media card section">
                      <div className="media media-left">
                          <figure className="media-left">
                            <p className="image is-64x64">
                              <img src="https://bulma.io/images/placeholders/128x128.png" alt="somePic"/>
                            </p>
                          </figure>
                          <div className="media-content">
                            <div className="content">
                              <p>
                                <strong>{ this.state.user.name }</strong> 
                                <br/>
                                <strong>UserName: </strong> <small>@{ this.state.user.username }</small>
                                <br/>
                                <strong>Email: </strong> { this.state.user.email }
                                <br/>
                                <strong>Phone: </strong>{ this.state.user.phone }
                                <br/>
                                <strong>Website: </strong>{ this.state.user.website }
                                <br/>
                                
                              </p>
                            </div>
                          </div>
                    </div>
                  <div className ="media-content">
                    <article className="message is-link is-small">
                              <div className="message-header" onClick={() =>  this.expandCompany() }>
                                <p><strong>Company: </strong></p>
                                <button className="expand-company fas fa-angle-down"></button>
                              </div>
                              { this.state.showCompany?
                                   <div className="message-body" id="company">
                                        <strong>Company name:</strong>{ this.state.user.company.name }
                                        <br/>
                                        <strong>Catchphrase: </strong> { this.state.user.company.catchPhrase }
                                        <br/>
                                        <strong>Slogan: </strong>{ this.state.user.company.bs }
                                        <br/>
                                  </div>
                              :null
                              }
                    </article>
                    <article className="message is-link is-small ">
                              <div className="message-header" onClick={() => this.expandAddress() }>
                                <p><strong>Address: </strong></p>
                                <button className=" fas fa-angle-down"></button>
                              </div>
                              { this.state.showAddress?
                                  <div className="message-body" id="address">
                                        <strong>Street:</strong> { this.state.user.address.street }
                                        <br/>
                                        <strong>Suite:</strong> { this.state.user.address.suite }
                                        <br/>
                                        <strong>City:</strong> { this.state.user.address.city }
                                        <br/>
                                        <strong>Zipcode:</strong> { this.state.user.address.zipcode }
                                        <br/>
                                        <strong>Geolocation:</strong> { this.state.user.address.geo.lat }, { this.state.user.address.geo.lng }
                                        <br/>
                                  </div>
                              :null
                              }
                    </article>
                  </div>
                </article>
                
            </div>

        );
        
    }
    }
}

export default SingleUser;