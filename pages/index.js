import React from "react";
import { Component } from "react/cjs/react.production.min";
import factory from "../ethereum/factory"

class CampaignIndex extends Component{

  static async getInitialProps(){
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return {campaigns}
  }

  
  render(){
    return <div>{this.props.campaigns[0]}</div>
  }
}


export default CampaignIndex;