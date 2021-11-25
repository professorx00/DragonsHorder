import React from 'react'

export default function ItemList({datas, cat}) {
    const data = datas[cat]
    
    return (
        <div className="container">
            {data.map((item)=>{
                const html = JSON.stringify(item.description)
                const modifiedHtml = html.replaceAll('"','')
                return (
                <div className='container-md m-2 shadow-lg rounded-3' key={item.Name}>
                    <div className='row justify-content-space-between rounded-top-3'>
                        <div className="col justify-content-between border border-1 rounded-top-3">
                            <h3>{item.Name}</h3>
                        </div>
                        <div className="col-1 border border-1 rounded-top-end-3">
                        <span>{item.price}GP</span>
                        </div>
                    </div>
                    <div className='row bg-primary text-white rounded-3'>
                        <div className='col'>
                            <div dangerouslySetInnerHTML={ { __html: modifiedHtml} }></div>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
        )
}