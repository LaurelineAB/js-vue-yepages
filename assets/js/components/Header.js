import {Nav} from "./Nav.js";
import {Presentation} from "./Presentation.js";

let Header =
{
	setup ()
	{
		
		let path = window.location.pathname;
		console.log(path);
		return {  path : path};
		
	},
	data () {
		return {
			links: 
			[
				{
					name: "Accueil",
					href: "https://laurelineagabibrac.sites.3wa.io/JavaScript/js-vue-yepages/index.html"
				},
				{
					name: "Livres",
					href: "https://laurelineagabibrac.sites.3wa.io/JavaScript/js-vue-yepages/livres/index.html"
				},
				{
					name: "Compte",
					href: "#"
				}
			],
			
			items:
			[
				{
					title: "Votre bibliothèque en ligne",
					buttons: true,
					path: "/JavaScript/js-vue-yepages/index.html"
				},
				{
					title: "La collection",
					buttons: false,
					path: "/JavaScript/js-vue-yepages/livres/index.html"
				}
			],
			path :""
		};
	},
	components: 
		{	Nav,
			Presentation
		},
	template:
	`<header>
		<Nav :links="links"/>
		<template v-for="item in items">
		<Presentation v-if="item.path === path" :item="item"/>
		</template>
	</header>
	`
};

export {Header};