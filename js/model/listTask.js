function ListTask() {
    this.arr = [];
}

ListTask.prototype.addTask = function (task) {
    this.arr.push(task);
};

ListTask.prototype._findIndex = function (id) {
    return this.arr.findIndex(function (task) {
      return id === task.id;
    });
};

ListTask.prototype.deleteTask = function (id) {
    var index = this._findIndex(id);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
};

ListTask.prototype.changeStatus = function (id, status){
    this.arr = this.arr.map((task)=>{
        if(task.id == id){
            if(task.status == "todo" ){
                task.status = "complete"
            }else{
                task.status = "todo"
            }
        }
        
        return task
    })
}
  