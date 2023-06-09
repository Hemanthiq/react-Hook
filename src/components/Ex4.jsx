import React, { useState,useCallback } from 'react'
import Age from './sub/Age'
import AgeInfo from './sub/AgeInfo'

// useCallback => will returns memorised value of callback
// useMemo => will return memorised function of callback

function Ex4() {
    const [age,setAge] = useState(10)

    const incrementAge = () => {
         setAge(age+1)
    }

    const userAge = 'Dhoni age is ${age} years'
    // useCallback will return a memorised version of the callback that only change if one of theinputs has changed
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <h3 className='display-3 text-success'>useCallback</h3>
                </div>
            </div>
            <Age age={age}/>
            <AgeInfo/>
        </div>
    )
}

export default Ex4