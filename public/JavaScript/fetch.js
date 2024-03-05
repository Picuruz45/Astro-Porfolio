
import { NetlifyAPI } from "netlify";
const client = new NetlifyAPI('-bQfKF6CrezuTgucW-IUaeBVh_eWgPWr4Xloy7mIfyU');

const ObtenerPagina = async (siteId) => {
    try {
        const pagina = await client.getSite({ siteId });

        return pagina
    } catch (error) {
        console.log(error);
    }
}

const ObtenerPaginas = async () => {
    let webs;

    try {
        const sites = await client.listSites();

        webs = sites;
    } catch (error) {
        console.log(error);
    }

    let dataWeb = [];

    const iterarWebs = webs.map( web => {
            
        const { name, site_id, url, state, screenshot_url } = web;

        const objectWeb = {
            name,
            site_id,
            url, state,
            screenshot_url
        }

        dataWeb.push(objectWeb);
    })

    return dataWeb; 
}

export {
    ObtenerPagina,
    ObtenerPaginas
}