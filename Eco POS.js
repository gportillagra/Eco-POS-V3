
//Force this app to portrait mode.
cfg.Portrait

include("Home.js")

//Main class for the app
class Main extends App
{
    //Called when app starts.
    onStart()
    {
    		//Establecer tema en pruebas modo oscuro
    		ui.setTheme("dark")
    		ui.setThemeColor("#673ab7", "#81d4fa")
    		
        //Add main layout and set default child margins.
        this.layMain = ui.addLayout( "main", "linear", "fillxy" )
        this.layMain.setChildMargins( .02, .0, .02, .02 )
        
        //Crear barra de titulo
        this.apb = ui.addAppBar(this.layMain, "Eco POS", "static", 1)
        this.btnDescuentos = ui.addButton(this.apb.layout, "label", "icon")
        this.btnConfig = ui.addButton(this.apb.layout, "settings", "icon")
        
        //Agregar barra de navegacion
        var menuNav = [
        	["", "add_shopping_cart"], //Ventas
        	["", "inventory"], //Inventarii
        	["", "dvr"], //Historial
        	["", "equalizer"], //Reportes
        	["", "people"] //Clientes
        ]
        this.navBar = ui.addBottomNavbar(this.layMain, menuNav, "hidelabels", 1)
        this.navBar.labels = false
        this.navBar.setOnTouch(this.onMenu)
        
        this.home = new Home( this )
        this.layPage = ui.addLayout( this.layMain, "frame", "", 1, 1 )
        this.home.show()
        
    }
    
    onMenu( title, index )
    {
        ui.showPopup(index)
    }
}