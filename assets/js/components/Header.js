import {Nav} from "./Nav.js";

let Header =
{
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
			]
		};
	},
	components: {Nav},
	template:
	`<header>
		<Nav :links="links"/>
	</header>
	`
};

export {Header};