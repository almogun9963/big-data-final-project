const { sections, event_types } = require("./Enums");

module.exports.EventObj = class EventObj{
    constructor(car_number, event_kind, section, direction, car_kind, day, time, is_special_day, first_section=-1 ){
        
        this.car_number = car_number;
        this.event_kind = event_kind;
        this.section = section;
        this.direction = direction;
        this.car_kind = car_kind;
        this.day = day;
        this.time = time;
        this.is_special_day = is_special_day;
        this.first_section = (first_section != -1)? first_section : this.first_section;
    }

    getCarNumber(){
        return this.car_number;
    }
    getEventKind(){
        return this.event_kind;
    }

    getSection(){
        return this.section;
    }

    getDirection(){
        return this.direction;
    }

    getCarKind(){
        return this.car_kind;
    }

    getDay(){
        return this.day;
    }

    getTime(){
        return this.time;
    }

    getIsSpecialDay(){
        return this.is_special_day;
    }

    getFirstSection(){
        return this.first_section;
    }

    setEventKind(event_kind){
        this.event_kind = event_kind;
    }

    setSection(section){
        this.section = section;
    }
    setTime(time){
        this.time = time;
    }

    toString(){
        return `{"car_number":"${this.car_number}","event_kind":"${this.event_kind}","section":"${this.section}","direction":"${this.direction}","car_kind":"${this.car_kind}","day":"${this.day}","time":"${this.time}","is_special_day":"${this.is_special_day}","first_section":"${this.first_section}"}`;
    }


}
