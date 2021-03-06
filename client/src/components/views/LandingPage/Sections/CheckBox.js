import React, { useState } from 'react'
import { Checkbox, Collapse } from 'antd';

const { Panel } = Collapse


function CheckBox(props) {

    const [Checked, setChecked] = useState([])

    const handleToggle = (value) => {

        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
        props.handleFilters(newChecked)
        //update this checked information into Parent Component 

    }

    const renderCheckboxLists = () => props.list && props.list.map((value, index) => (
        <React.Fragment key={index}>
            <Checkbox 
                
                onChange={() => handleToggle(value._id)}
                type="checkbox"
                checked={Checked.indexOf(value._id) === -1 ? false : true}
            />&nbsp;
            <span>{value.name}</span><br/>
        </React.Fragment>
    ))

    return (
        <div >
            <Collapse defaultActiveKey={['0']}  >
                <Panel style={{lineHeight:"40px",
backgroundImage: 'linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)',fontFamily: '"Great Vibes", cursive',fontSize:'20px', color:'#d54d7b',fontWeight: 'bold'
}} header="Indian And Fusion Wear" key="1">
                    {renderCheckboxLists()}
                </Panel>
            </Collapse>
        </div>
    )
}

export default CheckBox
