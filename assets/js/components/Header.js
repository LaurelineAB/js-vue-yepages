import {Nav} from "./Nav.js";
import {Presentation} from "./Presentation.js";

let Header =
{
	setup ()
	{
		let items =
			[
				{
					title: "Votre bibliothèque en ligne",
					buttons: true
				},
				{
					title: "La collection",
					buttons: false
				}
			];
			
		let item = null;
		if (window.location.pathname === "/JavaScript/js-vue-yepages/index.html")
		{
			item = items[0];
		}
		
		console.log(item);
		return item;
		
	},
	data () {
		return {
			links: 
			[
				{
					name: "Accueil",
					href: "index.html"
				},
				{
					name: "Livres",
					href: "livres/index.html"
				},
				{
					name: "Compte",
					href: "#"
				}
			],
			// item: 
			// {
			// 	title: "Votre bibliothèque en ligne",
			// 	buttons: true
			// }
			
			items:
			[
				{
					title: "Votre bibliothèque en ligne",
					buttons: true
				},
				{
					title: "La collection",
					buttons: false
				}
			]
		};
	},
	components: 
		{	Nav,
			Presentation
		},
	template:
	`<header>
		<Nav :links="links"/>
		<Presentation :items="items"/>
	</header>
	`
};

export {Header};