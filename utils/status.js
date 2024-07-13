

class Status {
    constructor(status,boolean,text){
        this.status = status
        this.boolean = boolean
        this.text = text
    }

    myStatus(){
        return this.status
    }

    myBoolean(){
        return this.boolean
    }

    myText(){
        return this.text
    }
}


const status200 = new Status(200,true,"Success")
const status404 = new Status(404,false,"err")
const status500 = new Status(500,false,"Not found")


export { status200,status404,status500 }