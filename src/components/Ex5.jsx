import React,{useMemo} from 'react'
import Mark from './sub/Mark'
import Mark from './sub/markInfo'


function Ex5(props){
    const incMarks = () => {
        setMarks(marks+1)
    }

    // use

    const updateMarks = useMemo(() => {
        result: `raju has scored ${marks}in Maths.`
    },[])

    return (
          <div className="row">
            <div className="col-md-12" text-center>
                <h3 className=' display-3 text-success'>useMemo()</h3>
            </div>
             <Mark mark={marks} handler={incMark} />
             <MarkInfo info={updateMarks} />
          </div>
    )
}
   

      

export default Ex5