import React from 'react'

const Menucard = ({menuData}) => {
    // console.log(menuData)
 
        return(
            <>
            <section className='main-card--cointainer'>
            {menuData.map((curele)=>{
                return(
                    <>
                    <div className='card-container' key={curele.id}>
            <div className='card'>
                <div className='card-body'>
                    <span className='card-number card-circle subtle'>{curele.id}</span>
                    <span className='card-author subtle'>{curele.name}</span>
                    <h2 className='card-title'>{curele.name}</h2>
                    <span className='card-description subtle'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim modi porro quaerat ullam omnis soluta tempora consequatur minus, accusamus saepe sit maiores dolorum error asperiores delectus iure ad. Expedita, perspiciatis.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi dolor vel non soluta quas corrupti commodi repellat nam consequuntur esse quis harum reiciendis eaque odio odit quibusdam sint, atque aspernatur!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex id porro saepe itaque dicta doloremque sequi distinctio voluptatem eius illum deserunt praesentium, cumque exercitationem aut libero omnis velit. Cupiditate, nam.
                    </span>
                    <div className='card-read'>READ</div>
                </div>
                <img src={curele.image} className='card-media'/>
                <span className='card-tag subtle'>Ordernow</span>
            </div>
        </div>
        </>
        )

        })}
        </section>
        </>
        )


}

export default Menucard