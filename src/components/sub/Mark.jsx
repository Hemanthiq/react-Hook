import React, { useMemo } from 'react'

function Mark(props){
    const [marks,setMarks] = useState(0)

    const incMarks = () => {
        setMarks(marks+1)
    }

    const updateMarks = useMemo(() => {
        result: `raju has scored ${marks}in Maths.`
    },[])

    return (
          <div className="row">
            <div className="col-md-12" text-center>
                <h3 className=' display-3 text-success'>useMemo()</h3>
            </div>
             
          </div>
    )
}
       

export default Mark