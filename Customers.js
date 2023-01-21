
//Class to create/show the home page
class Customers extends AppObject
{
    constructor( main )
    {
        super()
        this.main = main
        this.lay = null
    }

    show()
    {
        //If layout not created yet.
        if( !this.lay )
        {
            //Create the layout.
            this.lay = ui.addLayout( this.main.layPage, "linear",  "fillxy" )
            this.lay.setChildMargins( 0.02, 0.16, 0.02, 0.10 )     
        		
        		//Mostrsr pedidos pendienres
        		var pedidos = [
        			["person", "Publico en general", "Sin número de teléfono"]
        		]
        		this.listClientes = ui.addList(this.lay, pedidos, "icon", 0.96, 0.8505)
        		
        		this.fab = ui.addFAB( this.lay, "person_add", "Primary" )
        		this.fab.textColor = "#ffffff"
        }

        //Show the page.
        this.lay.show()
    }

    hide()
    {
        if( this.lay ) this.lay.hide()
    }
}