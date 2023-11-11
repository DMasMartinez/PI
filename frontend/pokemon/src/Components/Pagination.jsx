

function Pagination(props){
    // const total_pages = Math.ceil(props.pokemonlist.length/props.pokemonqt) salio mal por que modificamos el pokemon list para que solo sean los de determiando rango
    function prev_page(){
        if (props.page>=1){
            props.setPage(props.page-1)
        }
    }
    function next_page(){
        if (props.page<=7){
            props.setPage(props.page+1)
        }
        

    }
    console.log(props.pokemonlist.length)
    return(
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <button onClick={()=>prev_page()} type="button" class="btn btn-info btn-lg" aria-hidden="true">prev</button>
                    </a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <button onClick={()=>next_page()} type="button" class="btn btn-info btn-lg" aria-hidden="true">next</button>
                    </a>
                </li>
            </ul>
      </nav>
    )
} 

export default Pagination

{/* <div className="button-general">
            <button onClick={()=>prev_page()} type="button" class="btn btn-info btn-lg">prev</button>
            <button onClick={()=>next_page()} type="button" class="btn btn-info btn-lg">next</button>
        </div> */}