import React from 'react'

function NameList() {
    // const names =['Naveen','Rajivan','Revanth','Naheem','Subba Rao']
    const Person =[
        {
            id:1,
            name:'Naveen',
            salary:15000,
            department:'IT Department'
        },
        {
            id:2,
            name:'Rajivan',
            salary:15000,
            department:'IT Department'
        },
        {
            id:3,
            name:'Revanth',
            salary:15000,
            department:'IT Department'
        },
        {
            id:4,
            name:'Naheem',
            salary:15000,
            department:'IT Department'
        },
    ]
    // const nameList = names.map(name => <h2>{name}</h2>)
    const PersonList =Person.map(person=><h2 key={person.id}>  My Name is {person.name} of Id:{person.id}.My Salary is:{person.salary},currently iam working in {person.department} </h2>)
  return (
    <div>
        {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2>
        <h2>{names[3]}</h2>
        <h2>{names[4]}</h2> */}
        {
        //    nameList
        PersonList 
        }
    </div>
  )
}

export default NameList