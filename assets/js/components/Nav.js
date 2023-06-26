let Nav =
{
    props: 
    [
        "links"
    ],
    
    template:
    `<nav>
        <img src="assets/images/Logo-Blanc.svg" alt="Logo" />
        <ul>
            <li v-for="link in links"><a :href=link.href>{{link.name}}</a></li>
        </ul>
    </nav>
    `
};

export {Nav};