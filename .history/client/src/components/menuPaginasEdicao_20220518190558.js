import React, { Component} from "react"

export function MenuPaginas({ setMenuLateral, paginasEditaveis }) {

    return (
    <div className="menuPaginasEdicao">
      {paginasEditaveis.map((pagina, index) => {
        var count = index;
        return (
          <div
            key={index}
            id={"paginaMenu" + index}
            onClick={() => setMenuLateral(count)}
            className="paginaEdicao"
            name="SideMenuHome"
          >
            {pagina.pagina}
          </div>
        );
      })}
    </div>
  );
}

export function MenuLateral({  setFormularioARenderizar, itemsMenu }){ 
// name será o mesmo nome da função
        return(
            <div className="menuItensEdicao">
                   { itemsMenu.map( (item, index) => { 
                       var count = index
                        return (
                            <div key={index} className="itemEdicao" id={item.id} onClick={() => setFormularioARenderizar(count)}>{item.titulo}</div>
                        )
                    })
                }
            </div> 
        )
    
}

