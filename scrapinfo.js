
function getinfo(){

link="https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020"

// will get all the information using this class name
all_items=document.getElementsByClassName("item")

main_info=all_items[0].children[1]
links_info=all_items[0].children[2]

information=main_info.textContent

publication_date=information.substring(information.indexOf("PUBLICATION DATE:")+"PUBLICATION DATE:".length,information.indexOf("OBJECT:"))

object_=information.substring(information.indexOf("OBJECT:")+"OBJECT:".length,information.indexOf("ADDITIONAL INFORMATION:"))

bidding_date=information.substring(information.indexOf("BIDDING DATE:")+"BIDDING DATE:".length,information.indexOf("HISTORIC:"))

// will get all links here
all_link_text=links_info.children[0].children[0].getElementsByTagName('a')

for(var i=0;i<all_link_text.length;i++)
{
    if(all_link_text[i].href.includes("http"))
    {
        console.log(all_link_text[i].href)
    }
}
console.log("Publication Date: ",publication_date)
console.log("Bidding Date: ",bidding_date)
console.log("Object: ",object_)

}