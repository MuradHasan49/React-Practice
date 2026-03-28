import React, { use } from 'react'

const Api_test = ({ api }) => {
    const Api_data = use(api);
    console.log(Api_data.countries);
  return (
    <>
      <h1>hello i am Api_test</h1>
        <p>{`Total Countries: ${Api_data.countries.length}`}</p>
        <ol>
            {
                Api_data.countries.map(item=> <div key={item.name.common}>
                    <div>
                 <li>{item.name.common} Population is : {item.population.population}</li>
                   <img  src={item.flags.flags.png}/> 
                    </div>
                </div>
                  )
            }
        </ol>
    </>
  )
}

export default Api_test
