const path = require('path');
const index = path.join(__dirname,'../views/index.ejs');
const detail = path.join(__dirname,'../views/detalleMenu.ejs');
const about = {
    title: 'Entrada',
    description: 'Lleva unos ricos huevos de la granja de Ale, fideos, tomatas cherries y almendras',
    history:'Este plato me lo copié de mi abuelita que lo comía todas las mañanas cuando tenía hambre.',
    menu: 'Menú del día'
};
const menuDelDia = [
    {
    id: 1,
    title:'Milanesas con Papas Fritas',
    description:'Milanesa de carne con papas fritas a punto',
    price:"$ 1600.00"
    },
    {
    id: 2,
    title:'Empanadas salteñas',
    description:'carne cortada al cuchillo y otros envuelta en masa',
    price:"$ 200.00"
    },
    {
    id:3,
    title:'Humitas a la chala',
    description:'pasta de choclo molido , queso, cebolla y azucar',
    price:"$ 600.00"
    
    },
    {
        id: 4,
        title:'Tamales',
        description:'pasta en base a carne, cebolla y otros',
        price:"$ 400.00"
        
        },
 
]


const indexController = {
    index: (req, res) => {
        res.render('index', {about: about,menu: menuDelDia});
    },
    detail: (req, res) => {
        let plato= menuDelDia.find(plato => plato.id == req.params.menuId);
        res.render('detalleMenu',{plato:plato});
  
        
    }
}
module.exports = indexController;