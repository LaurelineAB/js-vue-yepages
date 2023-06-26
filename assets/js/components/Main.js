import {HomeBooks} from "./Home-books.js";
import {Catalog} from "./Catalog.js";

let Main =
{
    setup ()
	{
		let path = window.location.pathname;
		console.log(path);
		return {  path : path};
		
	},
	data() {
        return {
            path : ""
        };
    },
    components:
    {
        HomeBooks,
        Catalog
        
    },

    template:
    `<main>
        <HomeBooks v-if="path === '/JavaScript/js-vue-yepages/index.html'"/>
        <Catalog v-if="path === '/JavaScript/js-vue-yepages/livres/index.html'"/>
    </main>`
};
    


export {Main};