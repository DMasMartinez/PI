

function Pagination(props){
    const total_pages = Math.ceil(props.pokemonlist.length/props.pokemonqt)
    function prev_page(){
        if (props.page>=1){
            props.setPage(props.page-1)
        }
    }
    function next_page(){
        if (props.page<=total_pages){
            props.setPage(props.page+1)
        }
    }

    return(
        <div className="button-general">
            <button onClick={()=>prev_page()} type="button" class="btn btn-info btn-lg">prev</button>
            <button onClick={()=>next_page()} type="button" class="btn btn-info btn-lg">next</button>
        </div>
    )
} 

export default Pagination