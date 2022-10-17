function Validator() {
    this.checkEmpty = function(value, mess) {
        if (value === '') {
            alert(mess)
            return false;
        }
        return true;
    };

    this.checkDuplicate = function(listTask, content, mess) {
        let contents = listTask.map((task)=>{
            return task.content
        })
        if(contents.includes(content)){
            alert(mess)
            return false
        }
        return true
    };
}