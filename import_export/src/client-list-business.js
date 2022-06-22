import * as Clientbusiness from "./client-business";
import * as DataBusiness from "./data-business";

function printClientsAccounts() {
  const clients = DataBusiness.getClients();
  const ul = document.createElement("ul");
  for (let client of clients) {
    const element = Clientbusiness.getClientElement(client);
    ul.appendChild(element);
  }
document.getElementById("root").appendChild(ul);
}

  export {printClientsAccounts};