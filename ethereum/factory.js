import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json"


const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0xEE3597acA08CcC66Bd530208E676338CEB0DAfb9"
);


export default instance;

