
//Class to create/show the home page
class Home extends AppObject
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
            this.lay.setChildMargins( 0.02, 0.02, 0.02, 0.02 )     
        		
        		//Crear Layout para botones ingresos/gastos
        		this.layBotones = ui.addLayout(this.lay, "linear", "horizontal, left, fillx")
        		this.layBotones.setChildMargins( 0.02, 0.16, 0.02, 0.02 ) 
        		
       		 //Crear boton ingresos
       		 this.nuevoIngreso = ui.addButton(this.layBotones, "Ingresos", "outline, large", 0.5)
       		 this.nuevoIngreso.icon = "monetization_on"
        		this.nuevoIngreso.backColor = "#009688"
        		this.nuevoIngreso.textColor = "#ffffff"
        
        		//Crear boton gastoa
        		this.nuevoGasto = ui.addButton(this.layBotones, "Gastos", "outline, large", 0.5)
        		this.nuevoGasto.icon = "local_atm"
        		this.nuevoGasto.backColor = "#d81b60"
        		this.nuevoGasto.textColor = "#ffffff"
        
        		//Crear borton de nueva venta
        		this.nuevaVenta = ui.addButton(this.lay, "Nueva venta", "outline, large", 0.96)
        		this.nuevaVenta.icon = "shopping_cart"
        		this.nuevaVenta.backColor = "#4caf50" 
        		this.nuevaVenta.textColor = "#ffffff"
        
        		//Mostrsr pedidos pendienres
        		var pedidos = [
        			["event", "Misc Hernandez (La Estanzuela)", "Fecha de entrega: 15/01/2023"]
        		]
        		this.listPedidos = ui.addList(this.lay, pedidos, "icon, outline", 0.96, 0.713)
        		this.listPedidos.label = "Pedidos pendientes"
            
            //Add icon
            //this.txtIcon = ui.addText( this.lay, "home", "Primary,Icon")
            //this.txtIcon.setScale( 4,4 )

            //Add some text.
            //var s = "This is your <strong>home page</strong>."
            //this.txtHome = ui.addText( this.lay, s, "Multiline,Html" )
            //this.txtHome.textSize = "1.2em"
        }

        //Show the page.
        this.lay.show()
    }

    hide()
    {
        if( this.lay ) this.lay.hide()
    }
}