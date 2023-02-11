const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'change the tapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
    
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})


app.get('/api/', (request,response)=>{
    response.json(rappers)
    
})

app.get('/api/:name', (request,response)=>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    
})

app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`)
})

