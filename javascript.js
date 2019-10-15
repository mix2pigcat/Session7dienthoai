function mobile(battery,draft,status,inbox,sent) {
this.battery=battery;
this.inbox=inbox;
this.sent=sent;
this.draft=draft;
this.status=true;
this.getBatterry=function () {
        return this.battery;
}
this.setBatterry=function (battery) {
    this.battery=battery;
}
this.getStatus=function () {
    return this.status;
}
this.turnOn= function () {
    if(this.status){
        alert('Dien thoai dang mo')
}else{
        alert('Dien thoai se mo ngay')
        this.status = true
    }
}
this.turnOff = function () {
    if (this.status){
        alert('Dien thoai se tat')
        this.status = false
    } else {
        alert('Dien thoai dang tat')
    }
}
this.changeBattery = function () {
        if (this.battery<100){
            this.battery+= 10
        }else{
            alert('Pin da day')
        }
    }
    this.draftMessange = function (mess) {
    if(this.status){
        this.draft.push(mess);
        this.battery-=1;
    }else{
        alert('Dien thoai dang tat')
    }
    }
    this.sentMessage=function (phone) {
    if(this.status){
        this.sent.push(draft[0])
        phone.inbox.push(draft[0])
        this.draft=[];
        this.battery-=1;
    }else{
        alert('Dien thoai dang tat')
    }
    }
}